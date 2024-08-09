"use server";

import prisma from "@/lib/prismaClient/prismaClient";
import saltText from "../crypto/saltText";

type mailSenderProps = {
  email: string;
  operationType: "REGISTER" | "FORGOTPASS" | "EVENT";
  isTeacher: boolean;
  userId: string;
};

const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASSWORD,
  },
});

const mailSender = async ({
  email,
  operationType,
  userId,
  isTeacher,
}: mailSenderProps) => {
  try {
    const hashedToken = await saltText(userId, 5);
    let expiryDate = new Date();
    const daysToAdd = 5;

    expiryDate.setTime(expiryDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
    console.log(operationType);
    if (operationType == "REGISTER") {
      const updatedUserRegistration = await prisma.user.update({
        where: { id: userId },
        data: {
          verificationToken: hashedToken,
          verificationExpiry: expiryDate,
        },
      });
      const registrationMailOptions = {
        from: "preschoolario@gmail.com",
        to: email,
        subject: "<no-reply> Verify your email at Preschoolario",
        html: `<p>Click <a href="${process.env.DOMAIN}/verifyEmail?token=${hashedToken}&isTeacher=${isTeacher}">here</a> to verify your email.</p>`,
      };
      const mail = await transporter.sendMail(registrationMailOptions);
    }
    if (operationType == "FORGOTPASS") {
      const updatedUserForgotPass = await prisma.user.update({
        where: { id: userId },
        data: {
          forgotPasswordToken: hashedToken,
          forgotPasswordExpiry: expiryDate,
        },
      });

      const forgotPassMailOptions = {
        from: "preschoolario@gmail.com",
        to: email,
        subject: "<no-reply> Verify your email at Preschoolario",
        html: `<p>Click <a href="${process.env.DOMAIN}/forgotPassword?token=${hashedToken}&isTeacher=${isTeacher}" >here</a> to restart your password. </p>`,
      };
      const mail = await transporter.sendMail(forgotPassMailOptions);
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default mailSender;

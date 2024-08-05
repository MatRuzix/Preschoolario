import { NextResponse } from "next/server";

import prisma from "@/lib/prismaClient/prismaClient";
import { hash } from "bcrypt";
import z from "zod";

import registerSchema from "@/lib/schemas/registerSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedBody = registerSchema.parse(body);
    const { firstName, lastName, email, password, isTeacher, acceptTerms } =
      parsedBody;

    const hashedPassword = await hash(password, 12);
    const isUser = await prisma.user.count({ where: { email: email } });

    if (isUser !== 0) {
      return NextResponse.json(
        { error: "This user already exists" },
        { status: 409 }
      );
    }

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role: isTeacher ? "TEACHER" : "PARENT",
        acceptTerms,
      },
    });

    return NextResponse.json({
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

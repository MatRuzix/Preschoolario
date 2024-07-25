import { NextResponse } from "next/server";

import prisma from "@/lib/prismaClient/prismaClient";
import { hash } from "bcrypt";

export async function POST(request: Request) {
  const { firstName, lastName, email, password, isTeacher, acceptTerms } =
    await request.json();
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
}

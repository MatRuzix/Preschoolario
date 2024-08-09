import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prismaClient/prismaClient";

export async function POST(request: NextRequest) {
  try {
    const currentDate = new Date();
    const body = await request.json();
    const { token } = body;
    const user = await prisma.user.findFirst({
      where: { verificationToken: token },
    });
    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        { status: 404 }
      );
    }
    if (user?.emailVerified != null || user?.emailVerified != undefined) {
      return NextResponse.json(
        {
          error: "User already verified",
        },
        { status: 408 }
      );
    }
    if (user?.verificationExpiry && user.verificationExpiry < currentDate) {
      return NextResponse.json(
        {
          error:
            "Your verification token is outdated, please register once again",
        },
        { status: 409 }
      );
    }
    const updatedUser = await prisma.user.update({
      where: { id: user!.id },
      data: {
        emailVerified: currentDate,
        verificationExpiry: undefined,
        verificationToken: undefined,
      },
    });
    return NextResponse.json(
      {
        message: "Email verified successfully",
        ok: true,
      },
      { status: 200 }
    );
  } catch (error: any) {
    NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({});
}

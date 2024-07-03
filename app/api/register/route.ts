import { NextResponse } from "next/server";

import prisma from "@/lib/prismaClient/prismaClient";

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);

  return NextResponse.json({ ok: true });
}

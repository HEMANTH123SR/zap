// app/api/hostProfile/route.js
import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/db/index";
import HostProfile from "@/db/modules/host.module";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const hostProfile = new HostProfile(body);
    const savedProfile = await hostProfile.save();
    console.log("body", body);
    console.log(savedProfile);
    return NextResponse.json(
      { success: true, data: savedProfile },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

import { NextResponse } from "next/server";
import { connectDB } from "@/db/index";
import HostProfile from "@/db/modules/host.module";

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");

    if (!city) {
      return NextResponse.json(
        { success: false, message: "City parameter is required." },
        { status: 400 }
      );
    }

    // Case-insensitive, partial match query for city
    const regex = new RegExp(city, "i");
    const results = await HostProfile.find({ city: { $regex: regex } });

    if (results.length === 0) {
      return NextResponse.json(
        { success: false, message: "No matching cities found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: results }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

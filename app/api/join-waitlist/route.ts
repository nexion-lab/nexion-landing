import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    const formUrl = process.env.google_url;
    console.log(formUrl);

    // Google Forms expects URL-encoded data, not JSON
    const formData = new URLSearchParams();
    const googleemail = process.env.google_email;
    formData.append(String(googleemail), email);

    await axios.post(String(formUrl), formData.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return NextResponse.json(
      { message: "Successfully joined waitlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing waitlist signup:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

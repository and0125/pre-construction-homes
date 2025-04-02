import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const data = await request.json();

    const client = await clientPromise;

    // mongodb will create this db and collection if they don't already exist
    const collection = client.db().collection("interest form submissions");

    // Create a new document with timestamp fields
    const now = new Date();

    await collection.insertOne({
      name: data.name,
      email: data.email,
      country: data.country,
      interests: data.interests,
      createdAt: now,
      updatedAt: now,
    });

    return NextResponse.json(
      {
        message: `${Date.now()} - Data saved for ${data.name} - ${data.email} ${
          data.createdAt
        }`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("error in storing metadata: ", error);
    return NextResponse.json(
      {
        message: `Data not saved for ${name} - ${email} ${createdAt}`,
        error,
      },
      { status: 500 }
    );
  }
}

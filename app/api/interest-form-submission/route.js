import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  // TODO: adjust code below to send formData from interest form to MongoDB
    try {
      const {
        cohort,
        firstName,
        lastName,
        week,
        day,
        fileName,
        fileType,
        blobUrl,
      } = await request.json();

      const client = await clientPromise;

      // mongodb will create this db and collection if they don't already exist
      const collection = client.db().collection("video-uploads");

      // Create a new document with timestamp fields
      const now = new Date();

      await collection.insertOne({
        //TODO: add data fields here
      });

      return NextResponse.json(
        {
          message: `${Date.now()} - Data saved for ${cohort} - ${firstName} ${lastName}`, //TODO: modify the variables in the string here to match the data fields
        },
        { status: 201 }
      );
    } catch (error) {
      console.log("error in storing metadata: ", error);
      return NextResponse.json(
        {
          message: "Data not saved for ${cohort} - ${firstName} ${lastName}", //TODO: modify the variables in the string here to match the data fields
          error,
        },
        { status: 500 }
      );
    }
  }
}

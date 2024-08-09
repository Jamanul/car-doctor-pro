import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingCollection = db.collection("bookings");
  try {
    const res = await bookingCollection.findOne({
      _id: new ObjectId(params.id),
    });
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
};

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const bookingCollection = db.collection("bookings");
  try {
    const updateDoc = await request.json();

    const res = await bookingCollection.updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          ...updateDoc,
        },
      },
      { upsert: true }
    );
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
};

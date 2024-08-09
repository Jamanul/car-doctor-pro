import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const GET =async(request,{params})=>{
    const db = await connectDB()
    const bookingCollection = db.collection('bookings')
    try {
        const res = await bookingCollection.findOne({_id: new ObjectId(params.id)})
        return NextResponse.json(res)
    } catch (error) {
        console.log(error)
    }
}
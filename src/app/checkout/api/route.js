import { connectDB } from "@/lib/connectDB"

export const POST =async (request)=>{
const db = await connectDB()
const bookingCollection = db.collection('bookings')
try {
    const booking = await request.json()
    const res = await bookingCollection.insertOne(booking)
    return Response.json(res)
} catch (error) {
    console.log(error)
}
}
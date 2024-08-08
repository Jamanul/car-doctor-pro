import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"

export const DELETE = async(request,{params})=>{
    const db =await connectDB()
    const bookingCollection = db.collection('bookings')
    try {
        const res = await bookingCollection.deleteOne({_id: new ObjectId(params.id)})
        console.log(res)
        return Response.json(res)
        
    } catch (error) {
        console.log(error)
    }
}
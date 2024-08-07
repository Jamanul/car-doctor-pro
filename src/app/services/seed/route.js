import { connectDB } from "@/lib/connectDB"
import { services } from "../services"

export const GET =async()=>{
    try {
        const db = await connectDB()
        const serviceCollection = db.collection('services')
        const res = serviceCollection.deleteMany()
        const resp = await serviceCollection.insertMany(services)
        return Response.json({message: "inserted many"})
    } catch (error) {
        console.log(error)
    }
}
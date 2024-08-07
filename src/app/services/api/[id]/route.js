import { connectDB } from "@/lib/connectDB"

export const GET = async(request,{params})=>{
     const db = await connectDB()
     const serviceCollection = db.collection('services')
     try {
        const res = await serviceCollection.findOne({_id: params.id})
        return Response.json(res)
     } catch (error) {
        console.log(error)
     }
}
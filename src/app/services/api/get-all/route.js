import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET =async()=>{
    try {
        const db = await connectDB()
        const serviceCollection= db.collection('services')
        const resp = await serviceCollection.find().toArray()
        return NextResponse.json(resp)
    } catch (error) {
        console.log(error)
    }
}
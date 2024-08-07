import { connectDB } from "@/lib/connectDB"
const bcrypt = require('bcrypt')
export const POST = async(request)=>{
    const newUser = await request.json() 
    //console.log(newUser)
    try {
        const db = await connectDB()
        //console.log(db)
        const userCollection = db.collection('usersInfo')
        const exist = await userCollection.findOne({email: newUser.email})
        if(exist){
            return Response.json({message:"user exist"},{status:304}) 
        }
        const newPassword = bcrypt.hashSync(newUser.email, 14)
        const resp = await userCollection.insertOne({...newUser, password:newPassword})
        return Response.json({message:"user created"},{status:200})


    } catch (error) {
        return Response.json({message:"something went wrong",error},{status:500})
    }
}
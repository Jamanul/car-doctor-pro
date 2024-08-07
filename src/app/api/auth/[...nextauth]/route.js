import { connectDB } from "@/lib/connectDB"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcrypt";

const handler = NextAuth({
    session:{
        strategy: "jwt",
        maxAge: 30*24*60*60
    },
    providers:[
        CredentialsProvider({
            credentials:{
                email:{},
                password:{}
            },
            
            async authorize(credentials){
                const {email,password}=credentials
                if(!email || !password){
                    return null
                }
                const db = await connectDB()
                const currentUser = await db.collection('usersInfo').findOne({email: email})
                console.log(currentUser)
                if(!currentUser){
                    return null
                }
                console.log(password,currentUser.password)
                const passwordMatched= bcrypt.compareSync(password, currentUser.password)
                console.log(passwordMatched)
                // if(!passwordMatched){
                //     return null
                // }
                return currentUser
            },
            
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
          })
    ],
    callbacks:{
        async signIn({ user, account }) {
            if(account.provider==='google'){
                const {email}=user;
                try {
                    const db = await connectDB()
                    const userCollection = db.collection("usersInfo")
                    const existedUser= await userCollection.findOne({email: email})
                    if(!existedUser){
                        const resp = await userCollection.insertOne(user)
                        return user
                    }
                    else{
                        return user
                    }
                } catch (error) {
                    console.log(error)
                }
            }
            else{
                user
            }
          },
    },
    pages:{
        signIn: '/signin'
    }
})

export {handler as POST,handler as GET}
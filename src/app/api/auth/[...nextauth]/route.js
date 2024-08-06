import NextAuth from "next-auth/next"
import Credentials from "next-auth/providers/credentials"

const handler = NextAuth({
    session:{
        strategy: "jwt",
        maxAge: 30*24*60*60
    },
    providers:[
        CredentialsProvider
    ],
    callbacks:{},
    pages:{
        signIn: '/signin'
    }
})

export {handler as POST,handler as GET}
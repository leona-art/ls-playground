import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Facebook from 'next-auth/providers/facebook'
import Google from 'next-auth/providers/google'
import Discord from 'next-auth/providers/discord'
import Credentials from 'next-auth/providers/credentials'

export default NextAuth({
    providers: [
        Discord({
            clientId: "",
            clientSecret: ""
        }),
        
    ]
});
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Facebook from 'next-auth/providers/facebook'
import Google from 'next-auth/providers/google'
import Discord from 'next-auth/providers/discord'
import Credentials from 'next-auth/providers/credentials'

export default NextAuth({
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
        }),
        Credentials({
            name: "our account",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
                if (
                    credentials?.username === process.env.USER_NAME
                    &&
                    credentials?.password === process.env.PASSWORD
                ) {
                    return user
                } else {
                    return null
                }
            },
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    }
});
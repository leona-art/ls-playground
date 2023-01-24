import { NextPage } from "next";
import { useSession,signIn,signOut } from "next-auth/react";
const Login: NextPage = () => {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                <button onClick={()=>signOut()}>sign out</button>
            </>
        )
    }
    return (
        <>
            <button onClick={()=>signIn()}>sign in</button>
        </>
    )
}

export default Login;
import React from "react"
import { SignedIn, SignedOut, SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";

const Home = (props) => {
    
    // Use the useUser hook to get the details about the logged in user
    const { user } = useUser();

    return <div className="mainContainer">
        <div className={"titleContainer"}>
            <div>Welcome!</div>
        </div>
        <div>
            This is the home page.
        </div>
        
        <SignedOut>
            <SignInButton >
                <input
                    className={"inputButton"}
                    type="button"
                    value={"Log in"} />
            </SignInButton>
        </SignedOut>

        <SignedIn>
            <SignOutButton>
                <input
                    className={"inputButton"}
                    type="button"
                    value={"Log out"} />
            </SignOutButton>
        </SignedIn>

        {(user ? <div>
            Your email address is {user.primaryEmailAddress.emailAddress}
        </div> : null)}


    </div>
}

export default Home
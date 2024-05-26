import React, { ReactNode } from "react"
import Image from "next/image"
import { signIn } from "../../../../../auth"
import Button from "../button"
import { GithubLogo, GoogleLogo, MyTaskLogo } from "../../logos";

export default function OAuthLoginButton({ id, name }: { id: string, name: string }) {

    let icon: ReactNode = null;
    switch (id) {
        case "google": {
            icon = <GoogleLogo />; break;
        }
        case "github": {
            icon = <GithubLogo />; break;
        }
        case "mytask-client": {
            icon = <MyTaskLogo />; break;
        }
    }


    return (
        <form key={id}
            action={async () => {
                "use server"
                await signIn(id)
            }}
        >
            <Button className="text-black bg-gray-400 w-full" submit content={"Sign in with " + name} size="M" icon={icon} />
        </form>
    )
}
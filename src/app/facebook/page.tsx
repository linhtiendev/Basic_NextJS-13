"use client"

import { useRouter } from "next/navigation";

const Facebook = () => {
    const router = useRouter();

    const handleBtnBack = () => {
        router.push("/")
    }

    return (
        <>
            Hello facebook
            <div>
                <button
                    onClick={() => handleBtnBack()}
                >back home</button>
            </div>
        </>
    )
}
export default Facebook;
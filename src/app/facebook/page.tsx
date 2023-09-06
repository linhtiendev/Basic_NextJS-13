"use client"

import { useRouter } from "next/navigation";
import { Button } from 'react-bootstrap';

const Facebook = () => {
    const router = useRouter();

    const handleBtnBack = () => {
        router.push("/")
    }

    return (
        <>
            Hello facebook
            <div>
                <Button variant="success">Liti Mini</Button>
                <button
                    onClick={() => handleBtnBack()}
                >
                    back home
                </button>
            </div>
        </> 
    )
}
export default Facebook;
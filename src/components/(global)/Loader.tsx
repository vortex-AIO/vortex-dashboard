"use client"

import { RingLoader } from "react-spinners"

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[70vh]">
            <RingLoader size={30} color="gray" />
        </div>
    )
}

export default Loader

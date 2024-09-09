"use client"
import Image from "next/image"

const Income = ({title, score}) => {
    return(
        <div className="grid text-center">
            <span className="text-sm opacity-60">{title}</span>
            <span className="flex gap-1 justify-center items-center font-semibold">
                <span className="">{score}</span>
                <Image src="/shadow.svg" width={25} height={25} alt={'shadow'} />
            </span>
        </div>
    )
}

export default Income
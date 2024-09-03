import Image from "next/image"

const Income = ({title, score}) => {
    return(
        <div class="grid text-center">
            <span class="text-sm opacity-60">{title}</span>
            <span class="flex gap-1 justify-center items-center font-semibold">
                <span class="">{score}</span>
                <Image src="/shadow.svg" width={25} height={25} />
            </span>
        </div>
    )
}

export default Income
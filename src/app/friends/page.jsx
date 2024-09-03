import Image from "next/image"

function Friends(){
    return(
        <>
            <div class="flex min-h-[calc(100vh-100px)] flex-col px-6">
                <p class="mt-6 text-center text-[30px] font-semibold leading-[1.15]">Invite frens <br />and get more CATS</p>
                <div class="flex justify-center items-center my-6 grow">
                    <Image src="/cat-reff.svg" width={300} height={300} />
                </div>

                <div class="grid gap-3">
                    <p class="font-medium leading-snug text-center opacity-50">Tap on the button to invite your friends</p>

                    <button class="px-4 py-3 w-full font-bold text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg transition duration-300 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        Invite friends
                    </button>

                </div>
            </div>
        </>
    )
}

export default Friends
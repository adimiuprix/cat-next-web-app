import Task from '@/components/Task';
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className="flex relative flex-col">
        <div className="grow pb-[70px]">

            <div className="px-6 py-3">
                <span class="flex gap-2 items-center px-3 py-1 mx-auto w-max text-sm font-semibold bg-gradient-to-r from-sky-100 to-purple-100 rounded-lg">
                    <span class="flex gap-1 items-center">
                        <img src="" alt="" />
                        <span class="text-lg font-medium">+</span>
                        <span>🐈‍⬛</span>
                    </span>
                    GET MORE CATS WITH NOMIS NOW
                </span>

                <div class="relative mx-auto mt-6 mb-1 size-28">
                    <Image src="/main-cat.svg" width={200} height={300} />
                </div>

                <div className="h-14 text-center whitespace-nowrap total-cats">
                    <span className="inline-block font-semibold">818 CATS</span>
                </div>

                <div class="flex gap-2 justify-evenly items-center mb-8">
                    <div class="grid text-center">
                        <span class="text-sm opacity-60">Rewards</span>
                        <span class="flex gap-1 justify-center items-center font-semibold">
                            <span class="">+818</span>
                            <Image src="/shadow.svg" width={25} height={25} />
                        </span>
                    </div>
                    <div class="grid text-center">
                        <span class="text-sm opacity-60">Tasks</span>
                        <span class="flex gap-1 justify-center items-center font-semibold">
                            <span class="opacity-40">0</span>
                            <Image src="/shadow.svg" width={25} height={25} />
                        </span>
                    </div>
                    <div class="grid text-center">
                        <span class="text-sm opacity-60">Invites</span>
                        <span class="flex gap-1 justify-center items-center font-semibold">
                            <span class="opacity-40">0</span>
                            <Image src="/shadow.svg" width={25} height={25} />
                        </span>
                    </div>
                </div>

                <p class="mb-5 text-2xl font-semibold">Tasks</p>

                <div class="grid gap-3 mb-4">
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </div>

                <p class="mb-4 text-2xl font-semibold">
                    Cats <span class="text-xl">&</span> Frens
                </p>

                <div class="grid gap-2 pb-4">
                    <div class="flex gap-10 justify-between items-center">
                        <div class="flex gap-2 items-center">
                            <span class="grid place-content-center bg-gradient-to-tr from-teal-50 to-sky-100 rounded-full size-10">
                                <img src="/bitget-logo.png" alt="bitget logo" class="size-8" />
                            </span>
                            <span class="font-medium">Bitget Wallet</span>
                        </div>
                        <button class="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-sm gap-1.5">
                            <span>Complete</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  );
}

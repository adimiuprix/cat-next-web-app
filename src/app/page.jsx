import Image from 'next/image'
import Balance from '@/components/Balance';
import Income from '@/components/Income';
import Task from '@/components/Task';
import { reward } from './utils/Reward';
import { tasks } from './utils/Tasks';
import { validate } from '@/lib/action';

async function Home() {
    const idTele = 634574564
    const user = await validate(idTele)
    return (
        <>
        <div className="flex relative flex-col">
            <div className="grow pb-[70px]">
                <div className="px-6 py-3">
                    <span className="flex gap-2 items-center px-3 py-1 mx-auto w-max text-sm font-semibold bg-gradient-to-r from-sky-100 to-purple-100 rounded-lg">
                        <span className="flex gap-1 items-center">
                            <Image src={"/nomis-logo.svg"} height={25} width={25} alt={'nomis'} />
                            <span className="text-lg font-medium">+</span>
                            <span>🐈‍⬛</span>
                        </span>
                        GET MORE CATS WITH NOMIS NOW
                    </span>
                    <div className="relative mx-auto mt-6 mb-1 size-28">
                        <Image src="/main-cat.svg" width={200} height={300} alt={"logo-main"}  priority={true} />
                    </div>

                    <Balance props={user.balance} />

                    <div className="flex gap-2 justify-evenly items-center mb-8">
                        {reward.map((reward, index) => (
                        <Income key={index} title={reward.title} score={reward.score} />
                        ))}
                    </div>

                    <p className="mb-5 text-2xl font-semibold">Tasks</p>

                    <div className="grid gap-3 mb-4">
                        {tasks.map((task, index) => (
                        <Task key={index} nameTask={task.nameTask} reward={task.reward} />
                        ))}
                    </div>

                    <p className="mb-4 text-2xl font-semibold">
                        Cats <span className="text-xl">&</span> Frens
                    </p>

                    <div className="grid gap-2 pb-4">
                        <div className="flex gap-10 justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <span className="grid place-content-center bg-gradient-to-tr from-teal-50 to-sky-100 rounded-full size-10">
                                    <Image className="size-8" src="/bitget-logo.png" width={100} height={100} alt={'bitget logo'} />
                                </span>
                                <span className="font-medium">Bitget Wallet</span>
                            </div>
                            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-sm gap-1.5">
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
export default Home
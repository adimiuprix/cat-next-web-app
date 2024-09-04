import Link from 'next/link'
import Image from "next/image"

const Navbar = () => {
    return(
        <>
            <div class="flex fixed bottom-0 left-0 justify-evenly items-center w-full backdrop-blur-2xl bg-white/60">
                <Link href="/" className="grid justify-items-center gap-0.5 p-2 text-xs font-medium transition-opacity opacity-100">
                    <span className="grid h-9 w-12 place-content-center rounded-xl transition-colors bg-primary/[0.04]">
                        <Image src="/navlink/home-icon.svg" height={25} width={25} alt={'icon'} />
                    </span>
                    <span>Home</span>
                </Link>
                <Link href="/leaderboard" className="grid justify-items-center gap-0.5 p-2 text-xs font-medium transition-opacity opacity-100">
                    <span className="grid h-9 w-12 place-content-center rounded-xl transition-colors bg-primary/[0.04]">
                        <Image src="/navlink/leaderboard-icon.svg" height={25} width={25} alt={'icon'} />
                    </span>
                    <span>Leaderboard</span>
                </Link>
                <Link href="/friends" className="grid justify-items-center gap-0.5 p-2 text-xs font-medium transition-opacity opacity-100">
                    <span className="grid h-9 w-12 place-content-center rounded-xl transition-colors bg-primary/[0.04]">
                        <Image src="/navlink/friends-icon.svg" height={25} width={25} alt={'icon'} />
                    </span>
                    <span>Friends</span>
                </Link>
            </div>
        </>
    )
}

export default Navbar
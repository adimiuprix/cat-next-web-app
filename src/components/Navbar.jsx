import Link from 'next/link'

const Navbar = () => {
    return(
        <>
            <div class="flex fixed bottom-0 left-0 justify-evenly items-center w-full backdrop-blur-2xl bg-white/60">
                <Link href="/" className="grid justify-items-center gap-0.5 p-2 text-xs font-medium transition-opacity opacity-100">
                    <span className="grid h-9 w-12 place-content-center rounded-xl transition-colors bg-primary/[0.04]">
                        <img src="/navlink/home-icon.svg" />
                    </span>
                    <span>Home</span>
                </Link>
                <Link href="/leaderboard" className="grid justify-items-center gap-0.5 p-2 text-xs font-medium transition-opacity opacity-100">
                    <span className="grid h-9 w-12 place-content-center rounded-xl transition-colors bg-primary/[0.04]">
                        <img src="/navlink/leaderboard-icon.svg" />
                    </span>
                    <span>Leaderboard</span>
                </Link>
                <Link href="/friends" className="grid justify-items-center gap-0.5 p-2 text-xs font-medium transition-opacity opacity-100">
                    <span className="grid h-9 w-12 place-content-center rounded-xl transition-colors bg-primary/[0.04]">
                        <img src="/navlink/friends-icon.svg" />
                    </span>
                    <span>Friends</span>
                </Link>
            </div>
        </>
    )
}

export default Navbar
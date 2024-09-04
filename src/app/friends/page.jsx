'use client'
import React from 'react'
import Toastify from 'toastify-js'
import Image from "next/image"

function Friends(){

    const reffCode = "fdi5786fn"
    const referralLink = `https://t.me/botname_bot/name_app?startapp=${reffCode}`

    const linkReff = async () => {
        navigator.clipboard.writeText(referralLink)
        Toastify({
            text: `You have copied, your referral link is: ${referralLink}`,
            duration: 2000,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: 'linear-gradient(to right, #ff6f61, #de6161)',
                color: '#fff',
                borderRadius: '12px',
                padding: '12px 24px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            },
        }).showToast()
    }

    return(
        <div className="flex min-h-[calc(100vh-100px)] flex-col px-6">
            <p className="mt-6 text-center text-[30px] font-semibold leading-[1.15]">Invite frens <br />and get more CATS</p>
            <div className="flex justify-center items-center my-6 grow">
                <Image src="/cat-reff.svg" width={300} height={300} alt={"referral"} loading={'eager'} />
            </div>

            <div className="grid gap-3">
                <p className="font-medium leading-snug text-center opacity-50">Tap on the button to invite your friends</p>

                <button onClick={linkReff} className="px-4 py-3 w-full font-bold text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg transition duration-300 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    Invite friends
                </button>

            </div>
        </div>
    )
}

export default Friends
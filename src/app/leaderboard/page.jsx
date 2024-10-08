"use client"
import React, { useState, useEffect } from 'react';

function LeaderBoard(){
    const [User, setUser] = useState("Loading");
    const [Balance, setBalance] = useState("Loading");
    const [TotHolder, setTotHolder] = useState(0);
    const [AllHolder, setAllHolder] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('/api/get_user');
                const data = await res.json();
                if (res.ok) {
                    setUser(data);
                } else {
                    setError('Failed to fetch referral code');
                }
            } catch (err) {
                setError('An error occurred while fetching referral code');
            }
        };

        fetchUser();
    }, []);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const res = await fetch('/api/get_balance');
                const data = await res.json();

                if (res.ok) {
                    setBalance(data.balance);
                } else {
                    setError('Failed to fetch referral code');
                }
            } catch (err) {
                setError('An error occurred while fetching referral code');
            }
        };

        fetchBalance();
    }, []);

    useEffect(() => {
        const fetchTotHolder = async () => {
            try {
                const res = await fetch('/api/get_tot_holder');
                const data = await res.json();
                if (res.ok) {
                    setTotHolder(data);
                } else {
                    setError('Failed to fetch total holder');
                }
            } catch (err) {
                setError('An error occurred while fetching holder data');
            }
        };
        fetchTotHolder();
    }, []);
    console.log(TotHolder.tot_holders)

    useEffect(() => {
        const fetchAllHolder = async () => {
            try {
                const res = await fetch('/api/get_all_holder');
                const data = await res.json();
                if (res.ok) {
                    setAllHolder(data);
                } else {
                    setError('Failed to fetch referral code');
                }
            } catch (err) {
                setError('An error occurred while fetching referral code');
            }
        };

        fetchAllHolder();
    }, []);

    return(
        <div className="w-full flex relative flex-col">
            <p className="my-6 text-center text-[32px] font-semibold leading-none">Telegram Wall of Fame</p>
            <div className="mx-5 mb-4">
                <div className="grid grid-cols-[1fr_auto] items-center justify-between overflow-hidden rounded-[20px] bg-gradient-primary p-3 pr-5">
                    <div className="mr-4 flex items-center gap-2.5">
                        <div className="grid place-content-center font-medium bg-green-100 rounded-full size-10 shrink-0">AN</div>
                        <div className="grid">
                            <span className="flex items-center gap-1.5 truncate font-medium">
                            <span className="truncate">augom</span>
                            </span>
                            <span className="text-sm font-medium truncate opacity-60">{Balance} CATS</span>
                        </div>
                    </div>
                    {User !== "Loading" && (<span>#{User.userData.id}</span>)}
                </div>
            </div>

            <div className="flex justify-between items-center mx-5 my-4">
                <p className="font-semibold">{TotHolder.tot_holders} holders</p>
                <p className="text-sm opacity-50">(Top 100)</p>
            </div>
            <div className="grid gap-3.5 px-8 pb-6">
                <div className="grid grid-cols-[1fr_auto] items-center justify-between overflow-hidden">
                    <div className="mr-4 flex items-center gap-2.5">
                        <div className="grid place-content-center font-medium bg-green-100 rounded-full size-10 shrink-0">B</div>
                        <div className="grid">
                            <span className="flex items-center gap-1.5 truncate font-medium">
                            <span className="truncate">bohdanb29</span>
                            </span>
                            <span className="text-sm font-medium truncate opacity-60">13,732,511 CATS</span>
                        </div>
                    </div>
                    <span>🥇</span>
                </div>
                <div className="grid grid-cols-[1fr_auto] items-center justify-between overflow-hidden">
                    <div className="mr-4 flex items-center gap-2.5">
                        <div className="grid place-content-center font-medium bg-green-100 rounded-full size-10 shrink-0">0</div>
                        <div className="grid">
                            <span className="flex items-center gap-1.5 truncate font-medium">
                            <span className="truncate">JustinN1010</span>
                            </span>
                            <span className="text-sm font-medium truncate opacity-60">9,200,167 CATS</span>
                        </div>
                    </div>
                    <span>🥈</span>
                </div>
                <div className="grid grid-cols-[1fr_auto] items-center justify-between overflow-hidden">
                    <div className="mr-4 flex items-center gap-2.5">
                        <div className="grid place-content-center font-medium bg-green-100 rounded-full size-10 shrink-0">A</div>
                        <div className="grid">
                            <span className="flex items-center gap-1.5 truncate font-medium">
                                <span className="truncate">GOLDENStateSupport</span>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-500 size-4 shrink-0">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.007 8.27C22.194 9.125 23 10.45 23 12c0 1.55-.806 2.876-1.993 3.73.24 1.442-.134 2.958-1.227 4.05-1.095 1.095-2.61 1.459-4.046 1.225C14.883 22.196 13.546 23 12 23c-1.55 0-2.878-.807-3.731-1.996-1.438.235-2.954-.128-4.05-1.224-1.095-1.095-1.459-2.611-1.217-4.05C1.816 14.877 1 13.551 1 12s.816-2.878 2.002-3.73c-.242-1.439.122-2.955 1.218-4.05 1.093-1.094 2.61-1.467 4.057-1.227C9.125 1.804 10.453 1 12 1c1.545 0 2.88.803 3.732 1.993 1.442-.24 2.956.135 4.048 1.227 1.093 1.092 1.468 2.608 1.227 4.05Zm-4.426-.084a1 1 0 0 1 .233 1.395l-5 7a1 1 0 0 1-1.521.126l-3-3a1 1 0 0 1 1.414-1.414l2.165 2.165 4.314-6.04a1 1 0 0 1 1.395-.232Z" fill="currentColor"></path>
                                </svg>
                            </span>
                            <span className="text-sm font-medium truncate opacity-60">4,356,062 CATS</span>
                        </div>
                    </div>
                    <span>🥉</span>
                </div>
                <div className="grid grid-cols-[1fr_auto] items-center justify-between overflow-hidden">
                    <div className="mr-4 flex items-center gap-2.5">
                        <div className="grid place-content-center font-medium bg-green-100 rounded-full size-10 shrink-0">T</div>
                        <div className="grid">
                            <span className="flex items-center gap-1.5 truncate font-medium">
                            <span className="truncate">toannguyen111</span>
                            </span>
                            <span className="text-sm font-medium truncate opacity-60">4,127,962 CATS</span>
                        </div>
                    </div>
                    <span>#4</span>
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard
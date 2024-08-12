"use client"
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react";
import { deleteUser } from '@/actions/UserActions';
import { useRouter } from 'next/navigation';

function Navbar() {
    const { data: session } = useSession();
    const [dropdownHidden, setDropdownHidden] = useState(true);
    const [expandSearchBar, setExpandSearchBar] = useState(false);
    const [search, setSearch] = useState("");
    const router = useRouter();
    const inputRef = useRef(null);

    const searchIconClick = () => {
        setExpandSearchBar(!expandSearchBar);
        inputRef.current.focus();
    };

    const handleBlur = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setExpandSearchBar(false);
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            let username = search.replace(" ", "_");
            router.push(`/user/${username}`);
            setSearch("");
        }
    };

    const logout = async () => {
        await signOut({ redirect: false });
        router.push('/');
    };

    const deleteAccount = async () => {
        const cnf = confirm("Are you sure you want to delete your account?");
        if (cnf) {
            await deleteUser(session.user.email);
            logout();
        }
    };

    return (
        <>
            <div className={`flex justify-between items-center bg-[#130c2a] py-5 sm:px-8 px-5 gap-3 
  ${session && !expandSearchBar ? 'h-[90px] flex-col' : ''} 
  ${expandSearchBar ? 'h-[125px] flex-col' : ''} 
  ${!session && !expandSearchBar ? 'h-[60px]' : ''} 
  ease-out duration-700 sm:h-fit sm:flex-row`}
            >
                {/* logo */}
                <Link href='/' className='flex items-center font-bold text-purple-600 sm:text-[20px] text-[12px]'>
                    <img src="/logo2.gif" alt="logo" className="sm:w-8 sm:h-8 w-5 h-5"  />
                    <span>&lt;</span><span className='text-white'>Need</span><span>MONEY/&gt;</span>
                </Link>

                <ul className={`flex items-center justify-evenly text-white sm:text-[16px] text-[10px] sm:gap-4 gap-2.5 ${expandSearchBar ? 'sm:flex-row flex-col gap-3' : ''}`}>
                    <li className='relative flex items-center justify-center'>
                        <button onClick={searchIconClick}>
                            <img src="/search.gif" alt="search" className="sm:w-8 sm:h-8 w-[18px] h-[18px]" />
                        </button>
                        <input
                            ref={inputRef}
                            value={search}
                            onChange={handleSearch}
                            onKeyDown={handleKeyDown}
                            type="text"
                            className={`transition-all duration-[800ms] ease-out ${expandSearchBar ? 'opacity-100 lg:w-[370px] w-[220px] mx-[2px] sm:mx-0' : 'opacity-0 w-0'} rounded-sm text-black px-2 py-1 sm:px-3 sm:py-1.5 sm:text-[14px] text-[10px] outline-none`}
                            placeholder="Search User name"
                        />
                    </li>

                    <li>
                        {!session && <Link href='/Login'>
                            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg px-4 py-1.5 sm:px-5 sm:py-2 text-center sm:text-[14px] text-[10px]">LogIn</button>
                        </Link>}
                        {session && <div className='relative'>
                            <button onClick={() => setDropdownHidden(!dropdownHidden)} onBlur={() => setTimeout(() => setDropdownHidden(true), 300)} className="min-w-[116px] sm:min-w-[130px] text-white bg-purple-700 hover:bg-purple-600 rounded-lg sm:text-sm text-[10px] sm:px-5 sm:py-2.5 px-3 py-1.5 flex items-center justify-between gap-2 relative" type="button">
                                <div className='sm:w-7 sm:h-7 w-4 h-4 overflow-hidden border rounded-full bg-black border-white'>
                                    <img src={session.user.image ? session.user.image : '/avatar2.gif'} alt="user" className='sm:w-7 sm:h-7 w-4 h-4'  />
                                </div>
                                <span className='sm:max-w-[140px] max-w-[120px] text-ellipsis whitespace-nowrap overflow-hidden'>{session.user.username}</span>
                                <span><img src="/downarrow.png" alt="arrow" className='w-[10px] h-[10px]' /></span>
                            </button>

                            <ul id="dropdown" className={`${dropdownHidden ? 'hidden' : ''} z-40 w-full absolute text-sm`}>
                                <li>
                                    <Link href='/Dashboard' className="block sm:px-4 sm:py-2 px-2 py-1 hover:bg-gray-500 border-t border-slate-800 bg-gray-700 hover:-translate-x-7 rounded-t-lg transition-all duration-[800ms] ease-out">Dashboard</Link>
                                </li>
                                <li>
                                    <Link href={`/user/${session.user.username}`} className="block sm:px-4 sm:py-2 px-2 py-1 hover:bg-gray-500 border-t border-slate-800 bg-gray-700 hover:-translate-x-7 transition-all duration-[800ms] ease-out">Your page</Link>
                                </li>
                                <li>
                                    <button onClick={logout} className="block w-full text-left sm:px-4 sm:py-2 px-2 py-1 hover:bg-blue-500 border-t border-slate-800 bg-blue-700 hover:-translate-x-7 transition-all duration-[800ms] ease-out">Logout</button>
                                </li>
                                <li>
                                    <button onClick={deleteAccount} className="block w-full text-left sm:px-4 sm:py-2 px-2 py-1 hover:bg-red-500 border-t border-slate-800 bg-red-700 hover:-translate-x-7 rounded-b-lg transition-all duration-[800ms] ease-out">Delete account</button>
                                </li>
                            </ul>
                        </div>}
                    </li>
                </ul>
            </div>
            <div className="bg-violet-500 h-[1px] w-full"></div>
        </>
    );
}

export default Navbar;

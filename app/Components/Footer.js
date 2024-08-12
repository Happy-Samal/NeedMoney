import React from 'react'
import Link from 'next/link'

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="bg-violet-500 h-[1px] w-full"></div>
            <div className='w-full bg-[#130c2a] text-white flex sm:justify-between p-4 sm:px-10 px-6 sm:flex-row flex-col sm:text-base text-[10px] sm:gap-0 gap-4 text-center'>
                <div className='flex gap-4 flex-col'>
                    <div>
                        <p>Copyright &copy; {currentYear}-{currentYear + 1} Need Money| All rights reserved!</p>
                        <p>Made by Happy Samal with ❤</p>
                    </div>
                    <div className='flex gap-4 sm:justify-normal justify-center'>
                        <Link href={'/About'} className='hover:underline'>About</Link>
                        <Link href={'/ContactUs'} className='hover:underline'>Contact us</Link>
                        <Link href={'/PrivacyPolicy'} className='hover:underline'>Privacy Policy</Link>
                        <Link href={'/Terms&Condition'} className='hover:underline'>Terms & Conditions</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <span>Follow Me On</span>
                    <div className='flex gap-4'>
                        <a href="https://www.instagram.com/rudrasamal_?igsh=cGhnMDNoOTdsOHhl" target="_blank" rel="noopener noreferrer">
                            <img src="/instagram.gif" alt="instagram" className='w-[25px] h-[25px]' />
                        </a>
                        <a href="https://www.facebook.com/samalrudra.rudra?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <img src="/facebook.gif" alt="facebook" className='w-[25px] h-[25px]' />
                        </a>
                        <a href="https://www.linkedin.com/in/happy-samal-6215972a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin.gif" alt="linkedin" className='w-[25px] h-[25px]' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

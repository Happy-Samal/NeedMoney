'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 to-blue-200 py-12">
        <div className="sm:w-[65vw] w-[80vw] m-auto sm:py-16  py-10 flex items-center justify-center ">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg sm:px-10 sm:py-10 px-4 py-6 flex flex-col gap-6 items-center ">
            <h1 className="sm:text-5xl text-3xl font-bold text-purple-400">ERROR</h1>
            <h1 className="sm:text-3xl text-lg font-medium  text-black">Something went wrong!</h1>
            <div className='flex sm:flex-row flex-col gap-4 items-center'>
              <Link href={'/'}>
                <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold sm:px-6 sm:py-2 px-4 py-1.5 rounded-md sm:text-lg text-[12px] ">
                  Home
                </button>
              </Link>
              <Link href={'/'}>
                <button onClick={
                  // Attempt to recover by trying to re-render the segment
                  () => reset()
                } className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold sm:px-6 sm:py-2 px-4 py-1.5 rounded-md sm:text-lg text-[12px]">
                  Try again
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
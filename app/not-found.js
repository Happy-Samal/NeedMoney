
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 to-blue-200 sm:min-h-[74.5vh] py-2">
        <div className= "sm:w-[65vw] w-[80vw] m-auto sm:py-16  py-10 flex items-center justify-center ">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg sm:px-10 sm:py-10 px-4 py-6 flex flex-col gap-6 items-center  sm:min-h-[70vh]">
              <h1 className="sm:text-9xl text-5xl font-bold text-purple-400">404</h1>
              <h1 className="sm:text-4xl text-xl font-medium  text-black">oops! Page not found</h1>
              <p className="sm:text-2xl text-base font-medium text-black">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
              <div className='flex sm:flex-row flex-col gap-4 items-center'>
              <Link href={'/'}>
                <button className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold sm:px-6 sm:py-2 px-4 py-1.5 rounded-md sm:text-lg text-[12px] ">
                  Home
                </button>
              </Link>
              <Link href={'/ContactUs'}>
              <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold sm:px-6 sm:py-2 px-4 py-1.5 rounded-md sm:text-lg text-[12px]">
                Contact Us
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
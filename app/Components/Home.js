import React from 'react'
import Link from 'next/link'

function Home() {
  return (
    <>
      <div className="min-h-[74.5vh]">
        <div className="w-[70%] mx-auto flex flex-col items-center justify-center sm:py-56 gap-3 py-20 sm:gap-10">
          {/* log section */}
          <div className='flex items-center font-bold text-purple-600 sm:text-[55px] text-[24px] text-center'>
            <img src="/logo1.gif" alt="logo" className="sm:w-14 sm:h-14 w-9 h-9" />
            <span>&lt;</span><span className='text-white'>Need</span><span>MONEY/&gt;</span>
          </div>
          <span className="sm:text-[18px] text-[14px] font-bold text-[#c2c7ce] sm:text-base text-center">
            A Crowdfunding platform for friends. Get funded by your friends and followers. Start Now!
          </span>
          {/* Buttons */}
          <div className="flex gap-4">
            <Link href={'/Login'}>
              <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-2000/200 font-medium rounded-lg px-2.5 py-1.5 sm:px-5 sm:py-2.5 text-center sm:text-[14px] text-[10px]">Start Here</button>
            </Link>
            <Link href={'/About'}>
              <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-2000/200 font-medium rounded-lg px-2.5 py-1.5 sm:px-5 sm:py-2.5 text-center sm:text-[14px] text-[10px]">Read More</button>
            </Link>
          </div>
        </div>

        {/* line */}
        <div className="bg-purple-950 h-[2px] w-full"></div>

        <div className="flex gap-10 py-12 sm:py-20 sm:px-0 px-2 flex-col items-center relative text-center">
          <span className="sm:text-[25px] text-[16px] font-bold">Your friends can give you money</span>
          <div className="flex w-full justify-evenly">
            <div className="flex flex-col gap-3 sm:text-base text-[10px] items-center w-1/4">
              <div className="bg-gray-500 sm:w-[100px] sm:h-[100px] w-[60px] h-[60px] rounded-full grid place-content-center">
                <img src="/friend.gif" alt="friend" className="sm:w-20 sm:h-20 w-8 h-8" />
              </div>
              <span>Fund Your Friend</span>
              <span>You can help your friend</span>
            </div>

            <div className="flex flex-col gap-3 sm:text-base text-[10px] items-center w-1/4">
              <div className="bg-gray-500 sm:w-[100px] sm:h-[100px] w-[60px] h-[60px] rounded-full grid place-content-center">
                <img src="/yourself.gif" alt="yourself" className="sm:w-20 sm:h-20 w-8 h-8"  />
              </div>
              <span>Fund to Yourself</span>
              <span>You can fund yourself</span>
            </div>

            <div className="flex flex-col gap-3 sm:text-base text-[10px] items-center w-1/4">
              <div className="bg-gray-500 sm:w-[100px] sm:h-[100px] w-[60px] h-[60px] rounded-full grid place-content-center">
                <img src="/friendhelp.gif" alt="friendhelp" className="sm:w-20 sm:h-20 w-8 h-8"  />
              </div>
              <span>Friends Help You</span>
              <span>Your friends help you</span>
            </div>
          </div>
        </div>
        {/* line */}
        <div className="bg-purple-950 h-[2px] w-full"></div>

        <div className="flex gap-10 p-12 sm:py-20 flex-col">
          <span className="text-[16px] sm:text-[25px] font-bold text-center">Learn More About Us</span>
          <div className="flex flex-col gap-5 text-center sm:text-base text-[10px]">
            <span>At Need Money, we are dedicated to supporting developers, creators, and influencers by connecting them with their friends. Our platform enables individuals to fund their projects and ideas, providing a space where creativity and innovation can thrive.</span>
            <span>Our mission is to empower talented individuals by facilitating financial support, allowing them to focus on what they do best – creating. Whether you're a developer coding the next big app, a content creator making engaging videos, or an influencer sharing your passion, Need Money is here to help you achieve your goals.</span>
            <span>We believe in the power of community and the impact of collective support. By providing a platform for patrons to contribute, we aim to transform dreams into reality and foster a culture of creativity and innovation.</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

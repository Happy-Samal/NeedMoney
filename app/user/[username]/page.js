import React from 'react'
import User from '@/app/Components/User';

function page({params}) {
  return (
    <>
    <User username={params.username}/>
    </>
  )
}

export default page

export const metadata = {
  title: "Need Money - User Page to pay your friends",
  description: "Need Money app provide a platform where your friends and followers helps you.",
};

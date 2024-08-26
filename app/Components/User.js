"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { fetchPayment, fetchUser, submitPayment } from "@/actions/UserActions"
import { useSession } from "next-auth/react";
import Script from "next/script";


function User({ username }) {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState({})
  const [paymentInfo, setPaymentInfo] = useState([])
  const [payForm, setPayForm] = useState({ name: "", message: "", amount: "" })
  const [loading, setLoading] = useState(false); // Loading state

  const fetchDataFromBackend = async () => {
    setLoading(true); // Set loading to true when fetching starts
    let a = await fetchUser(username);
    setUserInfo(a);
    setLoading(false); // Set loading to false when fetching is done
  }
  const fetchPaymentFromBacked = async () => {
    setLoading(true); // Set loading to true when fetching starts
    let p = await fetchPayment(userInfo.email);
    setPaymentInfo(p);
    setLoading(false); // Set loading to false when fetching is done
  }
  useEffect(() => {
    fetchDataFromBackend()
  }, [username])

  useEffect(() => {
    fetchPaymentFromBacked()
  }, [userInfo])

  const inputHandle = (e) => {
    setPayForm({ ...payForm, [e.target.name]: e.target.value })
  }
  const formSubmit = async (data) => {
    let objData = Object.fromEntries(data)
    objData.email=userInfo.email
    let x =  await submitPayment(objData, userInfo.username)
    var options = {
      "key": userInfo.rzy_id, // Enter the Key ID generated from the Dashboard
      "amount": Number(objData.amount)*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": 'Need Money', //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": x.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          "name": userInfo.username, //your customer's name
          "email": userInfo.email,
          "contact": userInfo.phonenumber //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
    var rzp1 = new Razorpay(options);
    rzp1.open();
    setPayForm({ name: "", message: "", amount: "" })
  }

  // Loading UI
if (loading) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="text-white text-2xl flex items-center">
        Loading
        <span className="dot-animation">.</span>
        <span className="dot-animation">.</span>
        <span className="dot-animation">.</span>
      </div>
    </div>
  );
}

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      {userInfo.username!="" && userInfo.username !== username && <div className='sm:min-h-[90vh] h-[40vh] justify-center items-center flex flex-col'>
        <h2 className="sm:text-[44px] text-[24px] font-extrabold">User Not Found ☹</h2>
        <Link href={'/'} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-2000/200 font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 text-center sm:text-[16px] text-[13px] my-1">Home</Link>
      </div>}
      {userInfo.email && <div className="sm:min-h-[170vh]">
        <img src="/paisa.gif" alt="cover profile" className="w-full sm:h-[400px] h-[220px]  " />
        <div className="relative w-full bottom-[50px] sm:bottom-[60px] flex flex-col items-center justify-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full overflow-hidden bg-black border-white border-2">
            <img src={userInfo.image ? userInfo.image : '/avatar1.gif'} alt="profile" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-center">@{userInfo.username ? userInfo.username.toLocaleLowerCase() : 'username'}</h2>
            <p className="text-gray-400">{paymentInfo.length != 0 ? paymentInfo.length + " supporters. ₹" + paymentInfo.reduce((sum, item) => sum + item.amount, 0) + " raised" : "0 supporters. ₹0 raised"}</p>
          </div>
        </div>
        <div className={`flex px-6 sm:px-10 ${!session || (session && session.user.username !== userInfo.username) ? 'sm:justify-center py-12 ' : 'flex-col-reverse sm:flex-row gap-10 py-10 '}`}>
          {session && session.user.username === userInfo.username && <div className="bg-[#0e1426] sm:w-1/2 min-h-[400px] sm:p-8 p-4 gap-4 flex flex-col rounded-lg">
            <span className="sm:text-[22px] font-bold ">Your Payment History</span>
            <ul className="flex flex-col gap-4 scrollbar-hover-expand h-64 max-h-[444px]">
              {paymentInfo.length == "" && <li><span className="sm:text-[17px] text-[14px] font-bold ">No Payments yet ☹</span></li>}
              {paymentInfo.map((item) => {
                return <li key={item._id} className="flex items-center">
                  <img src="/avatar2.gif" alt="avatar" className='sm:w-9 sm:h-9 w-5 h-5' />
                  <span className="sm:text-[17px] text-[12px] text-gray-400"><span className="font-bold text-white">{item.name}</span> give you <span className="font-bold text-white">₹{item.amount}</span> with message <span className="font-bold text-white">"{item.message ? item.message : ""}"</span></span>
                </li>
              })}
            </ul>
          </div>}
          <div className={`bg-[#0e1426] sm:w-1/2 min-h-[400px] sm:p-8 p-4 gap-4 rounded-lg flex flex-col ${!session || (session && session.user.username !== userInfo.username) ? 'w-full sm:w-2/3 sm:h-[500px]' : ''}`}>
            <span className="sm:text-[22px] font-bold ">Make a Payment</span>
            <form action={formSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                value={payForm.name}
                onChange={inputHandle}
                name="name"
                placeholder="Enter your name"
                required
                className="text-black font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 sm:text-[14px] text-[12px] border-purple-500 border-2"
              />

              <input
                type="text"
                value={payForm.message}
                onChange={inputHandle}
                name="message"
                placeholder="Enter a message"
                className="text-black font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 sm:text-[14px] text-[12px] border-purple-500 border-2"
              />

              <input
                type="text"
                value={payForm.amount}
                onChange={inputHandle}
                name="amount"
                placeholder="Enter amount"
                required
                className="text-black font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 sm:text-[14px] text-[12px] border-purple-500 border-2"
              />

              <button
                type="submit"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-2000/200 font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 text-center sm:text-[16px] text-[13px] my-1"
              >
                PAY
              </button>
              <div className="flex gap-5">
                <button
                  type="submit"
                  onClick={() => {
                    setPayForm({ ...payForm, amount: 10 });
                    formSubmit; // Trigger the form submission
                  }}
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-2000/200 font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 text-center sm:text-[16px] text-[13px] my-1"
                >
                  ₹10
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    setPayForm({ ...payForm, amount: 20 });
                  }}
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-2000/200 font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 text-center sm:text-[16px] text-[13px] my-1"
                >
                  ₹20
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    setPayForm({ ...payForm, amount: 30 });
                  }}
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-2000/200 font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 text-center sm:text-[16px] text-[13px] my-1"
                >
                  ₹30
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
      }
    </>
  )
}

export default User

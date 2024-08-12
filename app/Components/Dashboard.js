"use client"
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from "react";
import { fetchUser, updateUser } from "@/actions/UserActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from "react-toastify";

function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [formInfo, setFormInfo] = useState({});

  // Memoize the function to avoid re-creating it on every render
  const fetchDataFromBackend = useCallback(async () => {
    if (session?.user?.username) {
      let a = await fetchUser(session.user.username);
      setFormInfo(a);
    }
  }, [session?.user?.username]);

  useEffect(() => {
    if (!session) {
      router.push("/Login");
    } else {
      fetchDataFromBackend();
    }
  }, [router, session, fetchDataFromBackend]);

  const inputHandle = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const formSubmit = async (data) => {
    let msg = await updateUser(formInfo.email, data);
    if (toast) {
      toast(msg, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    if (msg === "🦄 Saved Successfully!") {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  // If session is not available, don't render the rest of the component
  if (!session) return null;

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {session && (
        <div className="container mx-auto text-center items-center p-12 lg:px-48 flex flex-col gap-10">
          <span className="sm:text-[24px] text-[16px] font-bold">
            Set up your account to accept payment
          </span>

          <form action={formSubmit} className='flex flex-col gap-3 sm:gap-6 sm:w-2/3 w-full'>
            {/* Form fields */}
            <div className="flex flex-col text-start">
              <label htmlFor="email" className="sm:text-base text-[12px]">email</label>
              <input className="text-black font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 sm:text-[14px] text-[12px]" value={formInfo.email || ""} readOnly type="text" name="email" id="email" />
            </div>
            <div className="flex flex-col text-start">
              <label htmlFor="username" className="sm:text-base text-[12px]">username</label>
              <input className="text-black font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 sm:text-[14px] text-[12px] border-purple-500 border-2" value={formInfo.username || ""} onChange={inputHandle} type="text" name="username" id="username" required />
            </div>
            <div className="flex flex-col text-start">
              <label htmlFor="image" className="sm:text-base text-[12px]">image</label>
              <input className="text-black font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 sm:text-[14px] text-[12px] border-purple-500 border-2" value={formInfo.image || ""} onChange={inputHandle} type="text" name="image" id="image" />
            </div>
            <div className="flex flex-col text-start">
              <label htmlFor="phonenumber" className="sm:text-base text-[12px]">phonenumber</label>
              <input className="text-black font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 sm:text-[14px] text-[12px] border-purple-500 border-2" value={formInfo.phonenumber || ""} onChange={inputHandle} type="tel" name="phonenumber" id="phonenumber" required maxLength={10} minLength={10} />
            </div>
            <div className="flex flex-col text-start">
              <label htmlFor="rzy_id" className="sm:text-base text-[12px]">RazorPay ID</label>
              <input className="text-black font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 sm:text-[14px] text-[12px] border-purple-500 border-2" value={formInfo.rzy_id || ""} onChange={inputHandle} type="text" name="rzy_id" id="rzy_id" required />
            </div>
            <div className="flex flex-col text-start">
              <label htmlFor="rzy_secret" className="sm:text-base text-[12px]">RazorPay Secret</label>
              <input className="text-black font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 sm:text-[14px] text-[12px] border-purple-500 border-2" value={formInfo.rzy_secret || ""} onChange={inputHandle} type="text" name="rzy_secret" id="rzy_secret" required />
            </div>
            <button type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-2000/200 font-medium rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2 text-center sm:text-[14px] text-[10px] my-1">
              Save
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Dashboard;

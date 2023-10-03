import { useRouter } from "next/router";
import React from "react";

const LandingPage = () => {

    const router = useRouter();

    const routeToLogin = () => {
        router.push("/login")
    }
    const routeToScanner = () => {
        router.push("/qrscanner")
    }

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[500px]">
        <div className="bg-white pb-5 rounded shadow-xl">
            <div className="bg-blue-500 rounded-t-md">
            <h1 className="p-5 text-center font-bold text-2xl text-white">Realtime QR Base Attendance App With SMS Notification</h1>
            </div>
            
            <div className="flex items-center justify-center gap-10 mt-4">
                <button onClick={routeToScanner} className="p-5 hover:bg-blue-500 hover:text-white border-b-2 border-black transition-all active:scale-95 rounded-t-md">QR Scanner</button>
                <button onClick={routeToLogin} className="py-5 px-10 hover:bg-blue-500 hover:text-white border-b-2 border-black transition-all active:scale-95 rounded-t-md">Login</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

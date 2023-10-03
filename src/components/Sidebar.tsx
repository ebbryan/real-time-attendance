import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  HiUsers,
  HiUserGroup,
  HiHome,
  HiCalendar,
  HiQrCode,
  HiDocumentChartBar,
} from "react-icons/hi2";
import { BiLogOut, BiSolidUserPlus } from "react-icons/bi";

const Sidebar = () => {
  const router = useRouter();

  const handleRouteHome = () => {
    router.push("/user/dashboard");
  };
  const handleRouteStudent = () => {
    router.push("/user/student");
  };
  const handleRouteAttendance = () => {
    router.push("/user/attendance");
  };
  const handleRouteReports = () => {
    router.push("/report");
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("role");
      localStorage.removeItem("sub");

      router.push("/login");
    } catch (error) {
    }
  };
  const [isVisible, setisVisible] = useState(false);

  return (
    <div className="h-screen px-5 py-2 dark:bg-white flex flex-col justify-start w-1/5 -translate-y-auto overflow-y-auto border br-black border-solid">
      <div className="flex flex-col items-center p-4">
        <img
          src="https://imgs.search.brave.com/oakD98--OxkCPn4ud_jVH5_kOkHTf0qBYemDq7fzjq8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ncmFw/aC5mYWNlYm9vay5j/b20vMTMyMzY1OTc2/OTAwNzM1L3BpY3R1/cmU_dHlwZT1sYXJn/ZQ"
          alt="school logo"
          className="flex justify-items-center h-32 w-32 rounded-full"
        />
      </div>
      <hr />

      <div className="h-full px-5 py-5">
        <ul className="space-y-3 font-small">
          <li>
            <button
              onClick={handleRouteHome}
              className="w-full flex items-center p-2 text-black rounded-lg dark:text-black hover:bg-blue-100 dark:hover:bg-blue-200 group"
            >
              <span className="flex items-center gap-3 whitespace-nowrap">
                {" "}
                <HiHome className="text-1xl" />
                Dashboard
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={handleRouteStudent}
              className="w-full placeholder:flex items-center p-2 text-black rounded-lg dark:text-black hover:bg-blue-100 dark:hover:bg-blue-200"
            >
              <span className="flex items-center gap-3 whitespace-nowrap">
                {" "}
                <HiUsers className="text-1xl" />
                Students
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={handleRouteAttendance}
              className="w-full flex items-center p-2 rounded-lg text-black dark:text-black hover:bg-blue-100 dark:hover:bg-blue-200 group"
            >
              <span className="flex items-center gap-3 whitespace-nowrap">
                {" "}
                <HiCalendar className="text-1xl" />
                Attendance
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={handleRouteReports}
              className="w-full flex items-center p-2 text-black rounded-lg dark:text-black hover:bg-blue-100 dark:hover:bg-blue-200 group"
            >
              <span className="flex items-center gap-3 whitespace-nowrap">
                {" "}
                <HiDocumentChartBar className="text-1xl" />
                Reports
              </span>
            </button>
          </li>
        </ul>
      </div>
      <hr />
      <div className="w-full flex px-2 py-2">
        <button
          onClick={handleLogout}
          className="w-full flex px-2 py-2 text-black rounded-lg dark:text-black hover:bg-blue-100 dark:hover:bg-blue-200 group"
        >
          <span className="flex items-center gap-3 whitespace-nowrap">
            {" "}
            <BiLogOut className="text-1xl" />
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Student } from "@/types/student.type";

const AttendanceTable = ({...props}) => {

    const router = useRouter();
    const [studentData, setStudentData] = useState <Array<Student>>([]);

    const getStudentData = async () => {
        try {
          const accessToken = localStorage.getItem("accessToken");
          const result = await axios.get(`http://192.168.1.145:5000/students`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setStudentData(result.data);
          console.log(result.data, "<<<<<<");
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        getStudentData();
      }, []);

      const renderRows = () => {
        return studentData.map((student, index) => {
          return (
            <tr key={index}>
                <td className='capitalize font-semibold p-2'>{student.lastName}, {student.firstName} {student.middleName} </td>
            </tr>
          )
        })
      }
      return (
        <>
        <div>
            {/* <button onClick={}> Scan QR </button> */}
        </div>
        <div className="relative w-full flex flex-col shadow-lg mb-6 mt-4 ">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-col ">
              <h3 className="font-bold text-2xl m-4"> {props.header} </h3>
              <table className="w-full">
                <thead>
                  <tr className="border-2 border-solid-black border-l-0 border-r-0">
                    <th className="w-32 text-left text-md px-6 py-2"> Name </th>
                    <th className="w-24 text-md px-6 py-2"> Morning Time In</th>
                    <th className="w-32 text-md px-6 py-2"> Morning Time Out </th>
                    <th className="w-32 text-md px-6 py-2"> Update </th>
                  </tr>
                </thead>
                <tbody>
                {renderRows()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
    );
};

export default AttendanceTable
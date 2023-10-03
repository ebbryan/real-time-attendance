import React, { useState, useEffect } from "react";

import axios from "axios";
import Button from "./Button";



const NewUser = ({ ...props }) => {
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const [role, setRole] = useState("");

    

    const handlePost = async () =>  {
        try {
            const accessToken = localStorage.getItem("accessToken");
            await axios.post(
              "http://192.168.1.145:5000/users",
              {
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                username: userName,
                password: password,
                role: role,
              },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
            alert("success !");
          } catch (error) {
            console.log(error, "error !");
          }
        };
    
    return(
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[640px]">
        <div className="bg-white p-3 rounded">
        <h1 className="font-semibold block mt-9 mb-5 text-3xl">
                Student Information
              </h1>              
      <div className="flex flex-col w-auto justify-auto gap-2 mb-3">
        <div>
          <label
          htmlFor="first_name"
          className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black">
          First name
          </label>
        <input
          type="text"
          id="first_name"
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="First Name"
          required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div>
        <label
          htmlFor="middle_name"
          className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
        >
          Middle name
        </label>
        <input
          type="text"
          id="middle_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Middle Name"
          onChange={(e) => {
            setMiddleName(e.target.value);
          }}
        />
      </div>
      <div>
        <label
          htmlFor="company"
          className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
        >
          Last Name
        </label>
        <input
          type="text"
          id="last_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Last Name"
          required
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div>
        <label
          htmlFor="company"
          className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
        >
          Username
        </label>
        <input
          type="text"
          id="user_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Username"
          required
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div>
        <label
          htmlFor="company"
          className="font-semibold block mb-1 text-sm font-small text-gray-900 dark:text-black"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        /><h1 className="font-semibold block mt-9 mb-5 text-3xl">
                {" "}
                Student Information{" "}
              </h1>
        </div>
        <div>
        <select onChange={(e) => {setRole(e.target.value)}}
          className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 mb-1 dark:bg-white dark:border-gray-500 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 required">
          <option>--- Select Rule ---</option>
          <option value="1">Admin</option>
          <option value="2">User</option>
        </select>
      <div className="flex flex-row items-center gap-2">
        <Button text="Submit" onClick={handlePost} />
          <button onClick={props.onClose}>Close</button> </div>
        
        </div>
       
      </div>
      </div>
      </div>
      </div>
      )
        }

export default NewUser;
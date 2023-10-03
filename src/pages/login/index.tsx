import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "../../components/Button";
import axios from "axios";
import NewUser from "../../components/NewUser";

export default function index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const routeToHome = () => {
    router.push("/")
}

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      const result = await axios.post(
        "http://localhost:5000/authentication/login",
        {
          username,
          password,
        }
      );
      const {
        accessToken,
        role: { id, name },
        sub,
      } = result.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("role", name);
      localStorage.setItem("sub", sub);

      if (name === "ADMIN") {
        router.push("/admin/dashboard");
      } else if (name === "USER") {
        router.push("/user/dashboard");
      }
    } catch (error) {
      window.alert("Invalid Login");
    }
  };

  return (
    <main>
      <div className="border border-solid-rounded border-black flex min-h-full flex-col-2  align-center items-center mx-auto md:h-screen">
        <div className="shadow-xl rounded-2xl p-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex flex-col justify-center items-center mb-7">
            <h1 className="text-center font-semibold text-2xl leading-9 tracking-tight">
              {/* Real-time Attendance and Feedback System{" "} */}
              LOGIN
            </h1>
            <div className="p-0.5 bg-black rounded-full w-full opacity-25"></div>
          </div>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-900 leading-6"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  type="username"
                  name="username"
                  id="username"
                  required
                  className="block w-full rounded-md border-0 px-2.5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onKeyDown={handleKeyPress}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-6">
              <Button
                onClick={() => {
                  handleLogin();
                }}
                text="Sign in"
              />
              <Button
                onClick={() => {
                  routeToHome()
                }}
                text="Home"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

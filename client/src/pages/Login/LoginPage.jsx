import React from "react";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import LoginBG from "../../assets/images/LoginBG.png";

function LoginPage() {
  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("login clicked");
  };

  return (
    <div
      className="bg-cover flex justify-center w-screen min-h-screen overflow-scroll"
      style={{ backgroundImage: `url(${LoginBG})` }}
    >
      <div
        id=""
        className="z-10 my-auto flex flex-col items-center gap-6 bg-[#F4F1EC] w-[400px] min-h-[500px] p-10 rounded-lg shadow-lg"
      >
        <p className="text-lg text-[#043730] font-bold">Log in to KanBan</p>
        <form className="flex flex-col w-full gap-6" onSubmit={loginSubmit}>
          <div className="flex flex-col w-full gap-1">
            <p className="text-lg">Username / Email</p>
            <input
              type="text"
              placeholder="Enter username or email"
              className="p-2 rounded-md border-2 border-gray-300"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <p className="text-lg">Password</p>
            <input
              type="password"
              placeholder="Enter password"
              className="p-2 rounded-md border-2 border-gray-300"
            />
          </div>
          <button
            type="submit"
            className="bg-[#043730] hover:bg-[#3C6761] p-2 w-full rounded-md text-white font-medium transition-all ease-in-out"
          >
            Log in
          </button>
        </form>
        <p>OR</p>
        <button className="flex justify-center items-center gap-2 p-2 w-full rounded-md bg-white hover:bg-gray-100 hover:shadow-md font-medium transition-all ease-in-out">
          <FcGoogle />
          Log in with Google
        </button>
        <hr className="border border-gray-300 w-full" />
        <div className="flex gap-2 justify-center items-center text-sm">
          <Link to="/forgot-password">
            <p>Forgot password?</p>
          </Link>
          <div className="bg-gray-900 h-1 w-1 rounded-full"></div>
          <Link to="/signup">
            <p>Sign up for an account</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

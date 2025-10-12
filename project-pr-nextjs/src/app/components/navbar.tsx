"use client";

import React from "react";
import Link from "next/link";
import Profile from "./Profile";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col bg-[#161B22] border border-[#30363D] p-2 sm:p-3 w-full">
      <div className="flex flex-wrap items-center justify-between w-full mb-2 sm:mb-1">
        <div className="inline-flex items-center">
          <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg m-1 sm:m-2">
            <Link href="/" passHref>
              <span className="text-white font-bold text-lg sm:text-xl">
                PRB
              </span>
            </Link>
          </div>
          <h1 className="text-sm sm:text-2xl font-bold ml-2 sm:ml-3 text-white">
            PR Status Board
          </h1>
        </div>

        <div className="flex flex-col items-end text-right mr-2 sm:mr-4 mt-2 sm:mt-0">
          <p className="text-gray-400 text-xs sm:text-sm mb-1">
            {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
          <Profile />
        </div>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center">
        <Link href="/" passHref>
          <button
            className={`flex justify-center items-center rounded-lg font-semibold text-sm sm:text-lg tracking-wide duration-200 ease-in-out hover:-translate-y-1 
            bg-gradient-to-b from-[#1E232B] to-[#101418] border border-[#30363D] hover:bg-[#2B3139] shadow-md cursor-pointer 
            m-2 md:m-4 w-[80px] h-[38px] sm:h-[40px] sm:w-[100px] ${
              pathname === "/"
                ? "text-[#58A6FF] bg-zinc-950"
                : "text-white bg-[#161B22]"
            }`}
          >
            Home
          </button>
        </Link>

        <Link href="/openRequests" passHref>
          <button
            className={`flex justify-center items-center rounded-lg font-semibold text-sm sm:text-lg tracking-wide duration-200 ease-in-out hover:-translate-y-1 
            bg-gradient-to-b from-[#1E232B] to-[#101418] border border-[#30363D] hover:bg-[#2B3139] shadow-md cursor-pointer 
            m-2 md:m-4 w-[100px] h-[38px] sm:h-[40px] sm:w-[120px] ${
              pathname === "/openRequests"
                ? "text-[#58A6FF] bg-zinc-950"
                : "text-white"
            }`}
          >
            Open PR's
          </button>
        </Link>

        <Link href="/closedRequests" passHref>
          <button
            className={`flex justify-center items-center rounded-lg font-semibold text-sm sm:text-lg tracking-wide duration-200 ease-in-out hover:-translate-y-1 
            bg-gradient-to-b from-[#1E232B] to-[#101418] border border-[#30363D] hover:bg-[#2B3139] shadow-md cursor-pointer 
            m-2 md:m-4 w-[110px] h-[38px] sm:h-[40px] sm:w-[130px] ${
              pathname === "/closedRequests"
                ? "text-[#58A6FF] bg-[#103963]"
                : "text-white bg-[#161B22]"
            }`}
          >
            Closed PR's
          </button>
        </Link>
      </div>
    </div>
  );
}

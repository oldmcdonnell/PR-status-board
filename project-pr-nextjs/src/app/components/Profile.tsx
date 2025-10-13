"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button
        onClick={() => signIn("github")}
        className="flex items-center justify-center text-xs sm:text-sm font-semibold bg-blue-500 hover:bg-blue-600 text-white py-1.5 px-3 rounded-md whitespace-nowrap"
      >
        Sign in
      </button>
    );
  }

  return (
    <div className="flex flex-col items-end space-y-1">
      <div className="flex items-center space-x-2">
        <img
          src={session.user?.image || "/default-avatar.png"}
          alt={session.user?.name || "GitHub Avatar"}
          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full"
        />
        <span className="text-white text-xs sm:text-sm font-medium truncate max-w-[100px] sm:max-w-[140px]">
          {session.user?.name}
        </span>
      </div>

      <button
        onClick={() => signOut()}
        className="text-xs sm:text-sm font-semibold bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md self-end"
      >
        Sign out
      </button>
    </div>
  );
}

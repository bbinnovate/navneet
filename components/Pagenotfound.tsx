"use client";

import { useRouter } from "next/navigation";

const Pagenotfound = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      
      <h1 className="mb-4">
        Oops! Wrong Page
      </h1>

      <p className="mb-8">
        You are at the wrong page. Let me take you to the right one.
      </p>

      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80 transition"
      >
        Go to Home
      </button>

    </div>
  );
}

export default Pagenotfound
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Linked = () => {
  const pathname = usePathname();
  return (
    <>
      <li>
        <Link
          href="/"
          className={
            pathname === "/"
              ? "px-4 py-2 font-semibold text-green-400"
              : "px-4 py-2 text-white"
          }
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/myPlan"
          className={
            pathname === "/myPlan"
              ? "px-4 py-2 font-semibold text-green-400"
              : "px-4 py-2 text-white"
          }
        >
          My Plan
        </Link>
      </li>
    </>
  );
};

export default Linked;

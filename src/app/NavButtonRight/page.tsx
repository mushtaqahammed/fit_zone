"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { PracticeContext } from "@/context/PracticeContext";

const NavButtonRight = () => {
  const { addToPlan, save } = useContext(PracticeContext);

  return (
    <div>
      <Link href="/myPlan" className="btn btn-sm">
        Plan
        <span className="badge badge-sm rounded-full bg-green-500 text-white">
          {addToPlan.length}
        </span>
      </Link>

      <Link href="/myPlan" className="btn btn-sm">
        Saved
        <span className="badge badge-sm rounded-full border border-gray-400 text-white">
          {save.length}
        </span>
      </Link>
    </div>
  );
};

export default NavButtonRight;

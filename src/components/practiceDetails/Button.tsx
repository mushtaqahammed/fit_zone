"use client";

import { useState } from "react";




const Button = () => {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={() => setDone(!done)}
      className={`rounded-full px-5 py-2 text-sm font-semibold text-white transition ${
        done
          ? "bg-green-500 hover:bg-green-500"
          : "rounded-full border  px-5 py-2 text-sm font-medium transition hover:border-lime-400 hover:text-lime-400"
      }`}
    >
      ✓ Mark as Done
    </button>
  );
};

export default Button;

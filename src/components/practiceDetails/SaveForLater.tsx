"use client";

import { PracticeContext } from "@/context/PracticeContext";
import { IPractice } from "@/types/practiceTypes";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveForLater = ({ practice }: { practice: IPractice }) => {
  const { save, setSave } = useContext(PracticeContext);

  const handleSaveForLater = () => {
    if (!practice) {
      toast.error("Practice data not found!");
      return;
    }

    const alreadySaved = save.some((item) => item.id === practice.id);

    if (alreadySaved) {
      toast.info("Already saved!");
      return;
    }

    setSave([...save, practice]);
    toast.success("Saved for later!");
  };

  return (
    <button
      onClick={handleSaveForLater}
      className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm text-gray-300 transition hover:bg-gray-800"
    >
      Save for later
    </button>
  );
};

export default SaveForLater;

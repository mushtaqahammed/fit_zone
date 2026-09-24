"use client";

import { PracticeContext } from "@/context/PracticeContext";
import { IPractice } from "@/types/practiceTypes";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const AddToPlan = ({ practice }: { practice: IPractice }) => {
  const { addToPlan, setAddToPlan } = useContext(PracticeContext);

  const handleAddPlan = () => {
    if (!practice) {
      toast.error("Practice data not found!");
      return;
    }

    const alreadySaved = addToPlan.some((item) => item.id === practice.id);

    if (alreadySaved) {
      toast.info("Already saved!");
      return;
    }
    setAddToPlan([...addToPlan, practice]);
    toast.success("Added to today's plan!");
  };

  return (
    <button
      onClick={handleAddPlan}
      className="rounded-lg bg-lime-400 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-lime-300"
    >
      Add to today&apos;s plan
    </button>
  );
};

export default AddToPlan;

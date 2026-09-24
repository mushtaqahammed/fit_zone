"use client";

import { IPractice } from "@/types/practiceTypes";
import React, { ReactNode, useState, createContext } from "react";

interface IPracticeContext {
  addToPlan: IPractice[];
  setAddToPlan: React.Dispatch<React.SetStateAction<IPractice[]>>;

  save: IPractice[];
  setSave: React.Dispatch<React.SetStateAction<IPractice[]>>;

  deleteFromPlan: (id: number) => void;
  deleteFromSave: (id: number) => void;
}

export const PracticeContext = createContext<IPracticeContext>({
  addToPlan: [],
  setAddToPlan: () => {},

  save: [],
  setSave: () => {},

  deleteFromPlan: () => {},
  deleteFromSave: () => {},
});

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [addToPlan, setAddToPlan] = useState<IPractice[]>([]);
  const [save, setSave] = useState<IPractice[]>([]);

  // Delete from Today's Plan
  const deleteFromPlan = (id: number) => {
    setAddToPlan((prev) => prev.filter((practice) => practice.id !== id));
  };

  // Delete from Saved
  const deleteFromSave = (id: number) => {
    setSave((prev) => prev.filter((practice) => practice.id !== id));
  };

  const sharePracticeData = {
    addToPlan,
    setAddToPlan,
    save,
    setSave,
    deleteFromPlan,
    deleteFromSave,
  };

  return (
    <PracticeContext.Provider value={sharePracticeData}>
      {children}
    </PracticeContext.Provider>
  );
};

export default BookProvider;

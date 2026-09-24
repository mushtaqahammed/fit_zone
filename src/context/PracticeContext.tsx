"use client";

import { IPractice } from "@/types/practiceTypes";
import React, { ReactNode, useState, createContext } from "react";

interface IPracticeContext {
  addToPlan: IPractice[];
  setAddToPlan: React.Dispatch<React.SetStateAction<IPractice[]>>;

  save: IPractice[];
  setSave: React.Dispatch<React.SetStateAction<IPractice[]>>;
}

export const PracticeContext = createContext<IPracticeContext>({
  addToPlan: [],
  setAddToPlan: () => {},

  save: [],
  setSave: () => {},
});

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [addToPlan, setAddToPlan] = useState<IPractice[]>([]);
  const [save, setSave] = useState<IPractice[]>([]);

  const sharePracticeData = {
    addToPlan,
    setAddToPlan,
    save,
    setSave,
  };

  return (
    <PracticeContext.Provider value={sharePracticeData}>
      {children}
    </PracticeContext.Provider>
  );
};

export default BookProvider;

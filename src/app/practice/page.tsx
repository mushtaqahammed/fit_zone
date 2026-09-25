import React from "react";
import PracticeCard from "@/components/share/PracticeCard";
import { IPractice } from "@/types/practiceTypes";

const getData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fecting practices data", error);
    return [];
  }
};

const Practice = async () => {
  const practiceData = await getData();

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Heading */}
      <div className="mb-8 ">
        <h1 className="text-3xl font-bold uppercase text-white">The Library</h1>

        <p className="mt-3 text-sm ">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
        {practiceData.map((practice: IPractice) => (
          <PracticeCard key={practice.id} practice={practice} />
        ))}
      </div>
    </section>
  );
};

export default Practice;

import React from "react";
import PracticeCard from "@/components/share/PracticeCard";
import { IPractice } from "@/types/practiceTypes";

const getData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const Practice = async () => {
  const practiceData = await getData();

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold uppercase text-white">The Library</h1>

        <p className="mt-1 text-sm ">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {practiceData.map((practice: IPractice) => (
          <PracticeCard key={practice.id} practice={practice} />
        ))}
      </div>
    </section>
  );
};

export default Practice;

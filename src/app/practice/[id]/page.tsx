import AddToPlan from "@/components/practiceDetails/AddToPlan";
import SaveForLater from "@/components/practiceDetails/SaveForLater";
import { IPractice } from "@/types/practiceTypes";
import Image from "next/image";
import React from "react";
import { toast } from "react-toastify";

interface IPracticeDetailPage {
  params: Promise<{
    id: string;
  }>;
}

const getData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const PracticeDetailPage = async ({ params }: IPracticeDetailPage) => {
  const practiceData = await getData();

  const { id } = await params;

  const practice = practiceData.find(
    (practice: IPractice) => String(practice.id) === String(id),
  ) as IPractice;


  

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#101216] shadow-xl">
        <div className="grid gap-8 p-5 lg:grid-cols-2 lg:p-8">
          {/* ================= IMAGE ================= */}
          <div>
            <div className="relative `h-[400px]` w-full overflow-hidden rounded-xl `lg:h-[520px]`">
              <Image
                src={practice.image}
                alt={practice.name}
                height={800}
                width={600}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col">
            {/* Title */}
            <h1 className="text-3xl font-bold uppercase text-white">
              {practice.name}
            </h1>

            {/* Description */}
            <p className="mt-2 text-sm leading-6 text-gray-400">
              {practice.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {practice.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* ================= INFO ================= */}
            <div className="mt-5 overflow-x-auto rounded-xl border border-gray-800">
              <table className="w-full `min-w-[500px]` text-left text-sm">
                <tbody>
                  {/* Equipment */}
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 font-medium uppercase text-gray-400">
                      Equipment
                    </td>
                    <td className="px-4 py-3 text-right text-gray-200">
                      {practice.equipment}
                    </td>
                  </tr>

                  {/* Difficulty */}
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 font-medium uppercase text-gray-400">
                      Difficulty
                    </td>
                    <td className="px-4 py-3 text-right text-gray-200">
                      {practice.difficulty}
                    </td>
                  </tr>

                  {/* Sets */}
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 font-medium uppercase text-gray-400">
                      Sets
                    </td>
                    <td className="px-4 py-3 text-right text-gray-200">
                      {practice.sets}
                    </td>
                  </tr>

                  {/* Reps */}
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 font-medium uppercase text-gray-400">
                      Reps
                    </td>
                    <td className="px-4 py-3 text-right text-gray-200">
                      {practice.reps}
                    </td>
                  </tr>

                  {/* Duration */}
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 font-medium uppercase text-gray-400">
                      Duration
                    </td>
                    <td className="px-4 py-3 text-right text-gray-200">
                      {practice.duration} min
                    </td>
                  </tr>

                  {/* Calories */}
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-3 font-medium uppercase text-gray-400">
                      Calories
                    </td>
                    <td className="px-4 py-3 text-right text-gray-200">
                      {practice.caloriesBurned} kcal
                    </td>
                  </tr>

                  {/* Rating */}
                  <tr>
                    <td className="px-4 py-3 font-medium uppercase text-gray-400">
                      Rating
                    </td>
                    <td className="px-4 py-3 text-right text-gray-200">
                      ⭐ {practice.rating}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-6">
              <h2 className="text-sm font-bold uppercase text-white">
                Instructions
              </h2>

              <ol className="mt-3 space-y-3">
                {practice.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-xs leading-5 text-gray-400"
                  >
                    <span className="text-gray-500">{index + 1}.</span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* ================= BUTTONS ================= */}


            
            <div className="mt-6 flex flex-wrap gap-3">
              <AddToPlan practice={practice} />
              <SaveForLater practice={practice}/>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeDetailPage;

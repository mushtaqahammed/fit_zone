"use client";

import { PracticeContext } from "@/context/PracticeContext";
import { useContext, useState } from "react";
import { IPractice } from "@/types/practiceTypes";

import WorkoutCard from "@/components/share/ShortPracticeCard";
import Link from "next/link";
import Practice from "../practice/page";

const MyPlan = () => {
  const { addToPlan, save, deleteFromPlan, deleteFromSave } =
    useContext(PracticeContext);

  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">(
    "Duration",
  );

  const sortPractice = (Practice: IPractice[]) => {
    const sortedPractice = [...Practice];

    if (sortBy === "Duration") {
      sortedPractice.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "Rating") {
      sortedPractice.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "Calories") {
      sortedPractice.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }
    return sortedPractice;
  };

  const sortedTodayPlanPractice = sortPractice(addToPlan);
  const sortedSavePractice = sortPractice(save);

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const currentPractices = activeTab === "plan" ? addToPlan : save;

  const totalExercises = currentPractices.length;

  const totalMinutes = currentPractices.reduce(
    (total, practice) => total + practice.duration,
    0,
  );

  const totalCalories = currentPractices.reduce(
    (total, practice) => total + practice.caloriesBurned,
    0,
  );

  return (
    <main className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold uppercase text-white">My Plan</h1>

        <p className="mt-2 text-sm text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Exercises */}
        <div className="rounded-xl border border-gray-800 bg-[#15171c] p-5">
          <p className="text-sm text-gray-400">Exercises</p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {totalExercises}
          </h2>
        </div>

        {/* Minutes */}
        <div className="rounded-xl border border-gray-800 bg-[#15171c] p-5">
          <p className="text-sm text-gray-400">Minutes</p>

          <h2 className="mt-2 text-3xl font-bold text-white">{totalMinutes}</h2>
        </div>

        {/* Calories */}
        <div className="rounded-xl border border-gray-800 bg-[#15171c] p-5">
          <p className="text-sm text-gray-400">Calories</p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {totalCalories}
          </h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4">
        <div className=" grid grid-cols-[90%_10%]">
          {/* Today's Plan */}
          <div className="tabs tabs-lift ">
            <input
              type="radio"
              name="my_tabs_3"
              className="tab"
              aria-label="Today's plan"
              checked={activeTab === "plan"}
              onChange={() => setActiveTab("plan")}
            />

            <div className="tab-content border-base-300 bg-base-100 p-6">
              {sortedTodayPlanPractice.length > 0 ? (
                <div className="space-y-4">
                  {sortedTodayPlanPractice.map((practice: IPractice) => {
                    return (
                      <WorkoutCard
                        key={practice.id}
                        practice={practice}
                        onDelete={deleteFromPlan}
                      />
                    );
                  })}
                </div>
              ) : (
                <EmptyState />
              )}
            </div>

            {/* Saved */}
            <input
              type="radio"
              name="my_tabs_3"
              className="tab"
              aria-label="Saved"
              checked={activeTab === "saved"}
              onChange={() => setActiveTab("saved")}
            />

            <div className="tab-content border-base-300 bg-base-100 p-6">
              {sortedSavePractice.length > 0 ? (
                <div className="space-y-4">
                  {sortedSavePractice.map((practice: IPractice) => {
                    return (
                      <WorkoutCard
                        key={practice.id}
                        practice={practice}
                        onDelete={deleteFromSave}
                      />
                    );
                  })}
                </div>
              ) : (
                <EmptyState />
              )}
            </div>
          </div>

          <div>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as "Duration" | "Calories" | "Rating",
                  )
                }
                className="select select-success w-full appearance-none pr-10"
              >
                <option value="Duration">Duration</option>
                <option value="Calories">Calories</option>
                <option value="Rating">Rating</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const EmptyState = () => {
  return (
    <div className="mt-4 flex min-h-[300px] flex-col items-center justify-center rounded-xl border border-gray-700 bg-[#15171c] p-8 text-center">
      <h1 className="text-2xl font-bold text-white">NOTHING HERE YET</h1>

      <p className="mt-2 text-gray-400">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href="/practice">
        <button className="mt-5 rounded-lg bg-lime-400 px-5 py-2.5 font-semibold text-black transition hover:bg-lime-300">
          Go to workouts
        </button>
      </Link>
    </div>
  );
};

export default MyPlan;

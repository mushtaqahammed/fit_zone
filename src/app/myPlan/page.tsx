"use client";

import { PracticeContext } from "@/context/PracticeContext";
import { useContext } from "react";
import { IPractice } from "@/types/practiceTypes";
import PracticeCard from "@/components/share/PracticeCard";
import WorkoutCard from "@/components/share/ShortPracticeCard";

const MyPlan = () => {
  const { addToPlan,save } = useContext(PracticeContext);

  const totalExercises = addToPlan.length;

  const totalMinutes = addToPlan.reduce(
    (total, practice) => total + practice.duration,
    0,
  );

  const totalCalories = addToPlan.reduce(
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

      {/* name of each tab group should be unique */}

      <div className="mt-4">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Today's plan"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {addToPlan.length > 0 ? (
              addToPlan.map((practice: IPractice) => {
                return <WorkoutCard key={practice.id} practice={practice} />;
              })
            ) : (
              <div className="flex `min-h-[300px]` flex-col items-center justify-center rounded-xl border border-gray-700 bg-[#15171c] p-8 text-center mt-4">
                <h1 className="text-2xl font-bold text-white">
                  NOTHING HERE YET
                </h1>

                <p className="mt-2 text-gray-400">
                  Browse the library and add a lift to get today moving.
                </p>

                <button className="mt-5 rounded-lg bg-lime-400 px-5 py-2.5 font-semibold text-black transition hover:bg-lime-300">
                  Go to workouts
                </button>
              </div>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="saved"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {save.length > 0 ? (
              save.map((practice: IPractice) => {
                return <WorkoutCard key={practice.id} practice={practice} />;
              })
            ) : (
              <div className="flex `min-h-[300px]` flex-col items-center justify-center rounded-xl border border-gray-700 bg-[#15171c] p-8 text-center mt-4">
                <h1 className="text-2xl font-bold text-white">
                  NOTHING HERE YET
                </h1>

                <p className="mt-2 text-gray-400">
                  Browse the library and add a lift to get today moving.
                </p>

                <button className="mt-5 rounded-lg bg-lime-400 px-5 py-2.5 font-semibold text-black transition hover:bg-lime-300">
                  Go to workouts
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    </main>
  );
};

export default MyPlan;

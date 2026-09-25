import React from "react";
import Image from "next/image";
import { IPractice } from "@/types/practiceTypes";
import Link from "next/link";

interface IPracticeCardProps {
  practice: IPractice;
}

const PracticeCard = ({ practice }: IPracticeCardProps) => {
  return (
    <Link href={`/practice/${practice.id}`}>
      <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#15171c] shadow-sm transition hover:-translate-y-1 hover:shadow-lg ">
        {/* Image */}

        <Image
          src={practice.image}
          alt={practice.name}
          width={500}
          height={200}
          className="h-[200px] w-[500px] object-cover"
        />

        {/* Card Body */}

        <div className="p-4">
          {/* Muscle Groups */}
          <div className="mb-3 flex flex-wrap gap-2">
            {practice.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h2 className="text-lg font-bold uppercase text-white">
            {practice.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-sm text-gray-500">{practice.equipment}</p>

          {/* Divider */}
          <div className="my-3 border-t border-gray-800"></div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <span>◷ {practice.duration} min</span>

            <span>♥ {practice.caloriesBurned} kcal</span>

            <span>☆ {practice.rating}</span>
          </div>

          {/* Difficulty */}
        </div>
      </div>
    </Link>
  );
};

export default PracticeCard;

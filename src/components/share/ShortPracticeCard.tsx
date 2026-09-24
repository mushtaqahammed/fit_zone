import { IPractice } from "@/types/practiceTypes";
import Image from "next/image";
import Button from "../practiceDetails/Button";

interface WorkoutCardProps {
  practice: IPractice;
  onDelete: (id: number) => void;
}

const WorkoutCard = ({ practice, onDelete }: WorkoutCardProps) => {
  return (
    <div className="w-full rounded-2xl border border-gray-800 bg-[#11151d] p-4 text-white shadow-lg">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-36">
          <Image
            src={practice.image}
            alt={practice.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-bold uppercase">{practice.name}</h2>

          <p className="mt-1 text-sm text-gray-400">{practice.equipment}</p>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-1 text-gray-300">
              <span className="text-lime-400">◷</span>
              {practice.duration} min
            </span>

            <span className="flex items-center gap-1 text-gray-300">
              <span className="text-lime-400">🔥</span>
              {practice.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1 text-gray-300">
              <span className="text-yellow-400">★</span>
              {practice.rating}
            </span>
          </div>
        </div>

        <button className="rounded-full border border-gray-600 px-5 py-2 text-sm font-medium transition hover:border-lime-400 hover:text-lime-400">
          View Details
        </button>

        <Button />

        {/* Delete Button */}
        <button
          onClick={() => onDelete(practice.id)}
          className="rounded-full border border-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;

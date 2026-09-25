import React from "react";
import Image from "next/image";
import BannerImg from "@/assets/banner.png";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-10">
      <div className="grid items-center gap-8 overflow-hidden rounded-xl border border-gray-200 px-6 py-10 md:grid-cols-2 md:px-10 lg:px-12">
        {/* Left Content */}
        <div className="max-w-xl">
          {/* Small Title */}
          <p className="mb-4 text-xs font-bold tracking-wider text-lime-500">
            WORKOUT LIBRARY
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl font-bold">
            TRAIN WITH INTENT.LOG <br />
            EVERY SET.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Button */}
          <Link href="/practice">
            <button className="mt-6 rounded-md border border-lime-400 bg-lime-400 px-5 py-2 text-xs font-bold uppercase text-black transition hover:bg-lime-300">
              Browse Workouts
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center md:justify-end">
          <Image
            src={BannerImg}
            width={500}
            height={400}
            alt="FitLog workout"
            className="h-[260px] w-auto object-contain sm:h-[320px] md:h-[350px] lg:h-[390px]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

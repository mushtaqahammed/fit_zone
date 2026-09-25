import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const FooterPage = () => {
  return (
    <footer className="mt-auto w-full border-t border-gray-700 bg-[#15171c]">
      <div className="container mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image height={38} src={Logo} width={38} alt="FitLog Logo" />

          <h1 className="text-xl font-bold text-white">FITLOG</h1>
        </Link>

        <p className="text-sm text-gray-400">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;

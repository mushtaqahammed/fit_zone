import Link from "next/link";
import Logo from "@/assets/logo.png";
import Image from "next/image";

const FooterPage = () => {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-500 md:flex-row">
            <Link href="/" className="flex items-center gap-2">
              <Image height={38} src={Logo} width={38} alt="Fit Zone Logo" />
              <p className="font-bold">
                {" "}
                Fit<span className="text-lime-400">Log</span>
              </p>
            </Link>

            <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;

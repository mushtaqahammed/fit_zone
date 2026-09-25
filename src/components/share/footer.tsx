
import Logo from "@/assets/logo.png";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="container mx-auto w-7xl px-4 flex items-center justify-between mb-6">
      <Link href="/" className="flex items-center gap-2">
        <Image height={38} src={Logo} width={38} alt="Fit Zone Logo" />

        <h1 className="text-xl font-bold">FITLOG</h1>
      </Link>

      <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
    </div>
  );
};

export default Footer;
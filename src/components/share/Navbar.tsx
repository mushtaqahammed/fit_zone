import Link from "next/link";

import Image from "next/image";
import Logo from "@/assets/logo.png";
import NavButtonRight from "@/app/NavButtonRight/page";
import Linked from "./Link";


const Navbar = () => {
   
  const Links = (
<Linked/>
  );

  return (
    <div className=" sticky top-0 z-50 bg-base-100 shadow-sm ">
      <div className="navbar container mx-auto px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>

          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-2">
            <Image height={38} src={Logo} width={38} alt="Fit Zone Logo" />
           <p className="font-bold"> Fit<span className="text-lime-400">Log</span></p>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">
          <NavButtonRight />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

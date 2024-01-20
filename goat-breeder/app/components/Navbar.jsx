import Link from "next/link";
import React from "react";

const Navbar = ({}) => {
  return (
    <nav className="bg-white px-4 flex justify-start items-center">
      <Link href={""}>
        <h2 className="lato-700 text-xl text-greenEE">Home</h2>
      </Link>
      <Link href={""} className="ml-12">
        <h2 className="lato-700 text-xl text-greenEE">Products</h2>
      </Link>
      <Link href={""}>
        <h2 className="lato-700 text-xl text-greenEE"> About us</h2>
      </Link>
    </nav>
  );
};

export default Navbar;

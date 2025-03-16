"use client";

import React, { useState } from "react";
import Link from "next/link";
import navdata from "./Navdata";
import Logo from "../heading/Logo";

type NavItem = {
  name: string;
  link: string;
};

const Navigation = () => {
    const [activeNav, setActiveNav] = useState<string>("Dashboard");

  return (
    <aside className="h-full flex flex-col gap-10 ">
      <Logo />
      <ul className="h-auto flex flex-col ">
        {navdata.map((nav: NavItem, index: number) => (
          <li key={index}>
            <Link
              href={nav.link}
              className={`block py-3 px-4 w-full text-[1.1rem] transition-all ${
                activeNav === nav.name
                  ? "bg-white text-blue-950"
                  : "hover:bg-slate-800  text-white"
              }`}
              onClick={() => setActiveNav(nav.name)} 
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Navigation;

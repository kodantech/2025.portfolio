"use client";

import { navMenu } from "@/libs/constants/nav";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <header className="relative">
      <nav className="fixed top-2 right-2 left-2 z-10 rounded-2xl p-1">
        <ul className="flex items-center justify-center gap-4 rounded-xl">
          {navMenu.map((nav) => (
            <li className="rounded-xl px-4 py-2" key={nav.href}>
              <NavLink item={nav} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

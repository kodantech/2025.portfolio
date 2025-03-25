"use client";

import { NAV_MENU } from "@/libs/constants/nav-link";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <header className="relative">
      <nav className="pt-4">
        <ul className="flex items-center justify-around gap-4">
          {NAV_MENU.map((nav) => (
            <li key={nav.href} className="overflow-hidden">
              <NavLink item={nav} />
            </li>
          ))}
        </ul>

        <div className="horizontal-line mt-2 h-px bg-white" />
      </nav>
    </header>
  );
}

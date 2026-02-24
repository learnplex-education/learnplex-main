"use client";

/**
 * Global Navbar — full-width fixed header with Programs dropdown and active routing.
 * Dropdown opens only on mouse enter/leave of the Programs container.
 */

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const isProgramsActive =
    pathname === "/internship" || pathname === "/fellowship";

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <Image
            src="/logobigclearwhite.png"
            alt=""
            width={140}
            height={36}
            className="h-8 w-auto object-contain sm:h-9"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            Learnplex Education
          </span>
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-white transition-colors hover:text-white"
                : "text-slate-400 transition-colors hover:text-white"
            }
          >
            Home
          </Link>
          <Link
            href="/about"
            className={
              pathname === "/about"
                ? "text-white transition-colors hover:text-white"
                : "text-slate-400 transition-colors hover:text-white"
            }
          >
            About Us
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsProgramsOpen(true)}
            onMouseLeave={() => setIsProgramsOpen(false)}
          >
            <Link
              href="/#tracks"
              className={
                isProgramsActive
                  ? "text-white transition-colors hover:text-white"
                  : "text-slate-400 transition-colors hover:text-white"
              }
            >
              Programs
            </Link>
            <div
              className={`absolute right-0 top-full min-w-[160px] rounded-lg border border-slate-700 bg-slate-900 pt-2 shadow-lg transition-all duration-200 ${
                isProgramsOpen
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
              role="menu"
              aria-hidden={!isProgramsOpen}
            >
              <Link
                href="/internship"
                className="block px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
                role="menuitem"
              >
                Internship
              </Link>
              <Link
                href="/fellowship"
                className="block px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
                role="menuitem"
              >
                Fellowship
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

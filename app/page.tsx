/**
 * Learnplex Education — Coming Soon landing page.
 * Single functional component; no absolute paths or env-specific URLs.
 */

import Image from "next/image";

export default function Home() {
  return (
    // Full-viewport wrapper: deep navy background, column layout
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans">
      {/* Header: site identity and navigation anchor for screen readers */}
      <header className="flex w-full items-center justify-center border-b border-slate-800 px-6 py-4">
        <div className="flex w-full max-w-2xl items-center gap-3">
          <Image
            src="/logobigclear.png"
            alt="Learnplex Education"
            width={140}
            height={36}
            className="h-8 w-auto object-contain sm:h-10"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            Learnplex Education
          </span>
        </div>
      </header>

      {/* Hero: value proposition, sub-headline, and primary CTA */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
          Building the Next Generation of Engineers.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
          Learnplex is a nonprofit laboratory where students build real-world
          software. Our Fall 2026 Fellowship applications open August 1st.
        </p>
        <a
          href="mailto:hello@learnplex.org"
          className="mt-10 inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          Join the Waitlist
        </a>
      </main>

      {/* Core Pillars: mission highlights for quick scanning and SEO */}
      <section
        className="w-full border-t border-slate-800 px-6 py-12"
        aria-labelledby="pillars-heading"
      >
        <h2 id="pillars-heading" className="sr-only">
          Core Pillars
        </h2>
        <div className="mx-auto grid max-w-2xl gap-8 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-white">
              Democratizing Success
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Removing barriers to high-quality learning tools.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-white">
              Open-Access Resources
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Creating ad-free applications to augment student learning.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-white">
              Fellowship Model
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Where students build, document, and share production-grade
              software.
            </p>
          </div>
        </div>
      </section>

      {/* Footer: legal and branding */}
      <footer className="w-full border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-400">
        © 2026 Learnplex Education | A 501(c)(3) Nonprofit Organization.
      </footer>
    </div>
  );
}

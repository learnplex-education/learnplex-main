/**
 * About Us — Foundation narrative: mission, pillars, founder. For donors and applicants.
 */

import type { Metadata } from "next";
import { Scale, GitBranch, Layers, Users, Check } from "lucide-react";
import PlexBackground from "@/components/PlexBackground";

export const metadata: Metadata = {
  title: "About Us | Learnplex Education",
  description:
    "Learnplex is a student-powered open-source lab building high-utility learning tools while empowering the next generation of engineers and product leaders.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-2xl font-semibold text-white sm:text-3xl">
          A Foundation for Educational Equity
        </h1>

        {/* Mission: refined student-powered language */}
        <section className="mt-10 sm:mt-12">
          <div className="flex gap-4">
            <Scale
              className="h-6 w-6 shrink-0 text-indigo-400 sm:h-7 sm:w-7"
              aria-hidden
            />
            <div>
              <h2 className="text-lg font-semibold text-white sm:text-xl">
                Our mission
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                Learnplex is a registered 501(c)(3) nonprofit and a
                student-powered open-source lab building high-utility learning
                tools while empowering the next generation of engineers and
                product leaders. We exist so that financial status never
                dictates who can access — or build — the tools that accelerate
                success.
              </p>
            </div>
          </div>
        </section>

        {/* Build in Public ethos */}
        <section className="mt-12 sm:mt-16">
          <div className="flex gap-4">
            <GitBranch
              className="h-6 w-6 shrink-0 text-indigo-400 sm:h-7 sm:w-7"
              aria-hidden
            />
            <div>
              <h2 className="text-lg font-semibold text-white sm:text-xl">
                Build in Public
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                By shipping our core platform and products in public, we provide
                a transparent roadmap for any student to follow, learn from, and
                contribute to. What we build is not locked away — it becomes the
                curriculum for the next generation.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars: Column A (Products) + Column B (People) */}
        <section className="mt-12 sm:mt-16">
          <div className="grid gap-10 sm:grid-cols-2">
            <div className="flex gap-4">
              <Layers
                className="h-6 w-6 shrink-0 text-indigo-400 sm:h-7 sm:w-7"
                aria-hidden
              />
              <div>
                <h2 className="text-lg font-semibold text-white sm:text-xl">
                  Open-Access Tools
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                  Our tools are built by students, for students — designed to
                  bypass paywalls and ads. High-utility learning applications
                  that are free to use and open to contribute to, so everyone
                  can learn from and improve on what we ship.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users
                className="h-6 w-6 shrink-0 text-indigo-400 sm:h-7 sm:w-7"
                aria-hidden
              />
              <div>
                <h2 className="text-lg font-semibold text-white sm:text-xl">
                  Career Launchpad
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                  Hands-on professional experience at the heart of what we do.
                  Mentorship from industry experts and a pay-it-forward model
                  mean every contributor gets real feedback, real ship cycles,
                  and a real pathway into tech.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal & contact */}
        <section className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:mt-16">
          <h2 className="text-base font-semibold text-white">
            Legal & transparency
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Learnplex Education is a registered 501(c)(3) nonprofit. We are
            committed to using our resources to advance educational equity and
            open-access learning tools. For sponsorship or partnership
            inquiries, contact us at{" "}
            <a
              href="mailto:hello@learnplex.org"
              className="text-indigo-400 underline decoration-indigo-500/50 underline-offset-2 hover:decoration-indigo-400"
            >
              hello@learnplex.org
            </a>
            .
          </p>
        </section>

        {/* Horizontal divider before Founder — personal, separate feel */}
        <hr className="mt-12 border-slate-800 sm:mt-16" />

        {/* Note from our Founder — professional card with Plex background */}
        <section
          className="mt-12 sm:mt-16"
          aria-labelledby="founder-note-heading"
        >
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-indigo-500/30 bg-slate-900/50 p-10 shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]">
            {/* Faint non-interactive Plex background clipped to card */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.1]"
              aria-hidden
            >
              <PlexBackground />
            </div>

            <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_0.65fr]">
              {/* Left column (60): The "Why" */}
              <div>
                <h2
                  id="founder-note-heading"
                  className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl"
                >
                  A Note from our Founder
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-slate-400 sm:text-base">
                  Learnplex began with a simple observation at UC Berkeley: the
                  most talented student builders often lacked a professional
                  bridge to industry, and the most powerful educational tools
                  were often locked behind paywalls.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                  We founded this lab to change that. As a 501(c)(3) nonprofit,
                  our mission is twofold: to build production-grade,
                  open-source software that stays free forever, and to provide
                  students with a &quot;sandbox&quot; that mirrors the highest
                  standards of the tech industry.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                  Whether you&apos;re a student looking to ship your first
                  major feature or a professional looking to mentor the next
                  generation, you have a place in the Plex.
                </p>
                <p className="mt-8 font-medium italic text-indigo-400">
                  — Michael Florip
                </p>
                <a
                  href="https://www.linkedin.com/in/michaelflorip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-lg border border-slate-600 px-4 text-sm font-medium text-slate-300 transition-colors hover:border-indigo-500 hover:text-indigo-400"
                >
                  Connect on LinkedIn
                </a>
              </div>

              {/* Right column (40): The 2026 Vision */}
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                  The 2026 Vision
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex gap-3">
                    <Check
                      className="h-5 w-5 shrink-0 text-indigo-400"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-slate-400">
                      <strong className="text-slate-300">Scale:</strong> Expand
                      the FuturePlex Fellowship to 50+ students across the US.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check
                      className="h-5 w-5 shrink-0 text-indigo-400"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-slate-400">
                      <strong className="text-slate-300">Ship:</strong> Launch
                      three production-grade open-source tools for the global
                      student community.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Check
                      className="h-5 w-5 shrink-0 text-indigo-400"
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-slate-400">
                      <strong className="text-slate-300">Mentor:</strong>{" "}
                      Onboard 20+ Industry Mentors from top-tier tech and
                      consulting firms.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

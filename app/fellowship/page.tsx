/**
 * Fellowship track recruitment page — Product Fellows (Innovation).
 * Role: The Researchers & Creators. Includes Current Research Areas and blueprint grid.
 */

import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function FellowshipPage() {
  return (
    <div className="min-h-screen font-sans bg-blueprint-grid">
      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <div className="flex items-center gap-3">
          <Sparkles className="h-10 w-10 text-indigo-400" aria-hidden />
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            FuturePlex Fellowship
          </h1>
        </div>
        <p className="mt-2 text-lg text-indigo-300/90">
          The Researchers & Creators
        </p>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-base font-semibold text-white">Focus</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Cross-functional squads building products from idea to production —
              for example tools like Billinda.ai. Full product lifecycle from
              Figma to production: design, build, ship, and iterate with support
              from Core Interns and mentors.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-white">
              Ideal Candidate
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Students interested in AI-powered tools, UX design, and growth
              strategy — who want to own a product stream and see it through to
              real users.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white">
              Current Research Areas
            </h2>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-400">
              <li>AI-augmented learning and study tools</li>
              <li>Open-access educational apps and guides</li>
              <li>Product design and user research</li>
              <li>Experimentation and metrics</li>
            </ul>
          </div>
        </section>

        <div className="mt-12">
          <Link
            href="mailto:hello@learnplex.org?subject=Fellowship%20Application%20Fall%202026"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Application Open Fall 2026
          </Link>
        </div>
      </main>
    </div>
  );
}

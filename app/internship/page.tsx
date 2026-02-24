/**
 * Internship track recruitment page — Core Interns (Infrastructure).
 * Role: The Architects of the Lab. Blueprint grid background for consistency.
 */

import Link from "next/link";
import { Shield } from "lucide-react";

export default function InternshipPage() {
  return (
    <div className="min-h-screen font-sans bg-blueprint-grid">
      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <div className="flex items-center gap-3">
          <Shield className="h-10 w-10 text-indigo-400" aria-hidden />
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            Internship Program
          </h1>
        </div>
        <p className="mt-2 text-lg text-indigo-300/90">
          The Architects of the Lab
        </p>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-base font-semibold text-white">Focus</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Core infrastructure, DevOps (Vercel/GitHub), branding, and
              security. You’ll work on the systems that keep Learnplex and its
              products fast, reliable, and safe for every user.
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-white">
              Ideal Candidate
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Students interested in the &quot;plumbing&quot; of modern software
              foundations — pipelines, deployment, identity, and platform
              tooling — and who want to ship infrastructure that others build on.
            </p>
          </div>
        </section>

        <div className="mt-12">
          <Link
            href="mailto:hello@learnplex.org?subject=Internship%20Application%20Fall%202026"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Application Open Fall 2026
          </Link>
        </div>
      </main>
    </div>
  );
}

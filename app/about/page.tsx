/**
 * About Us — Foundation narrative: mission, pillars, founder. For donors and applicants.
 */

import type { Metadata } from "next";
import { Scale, GitBranch, Layers, Users, User } from "lucide-react";

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
        <section className="mt-12 rounded-lg border border-slate-800 bg-slate-900/50 p-6 sm:mt-16">
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

        {/* Founder: closing section — Berkeley to Industry (Deloitte) as proof of mission */}
        <section className="mt-12 rounded-lg bg-slate-900/30 px-6 py-8 sm:mt-16 sm:px-8 sm:py-10">
          <div className="flex gap-4">
            <User
              className="h-6 w-6 shrink-0 text-indigo-400 sm:h-7 sm:w-7"
              aria-hidden
            />
            <div>
              <h2 className="text-lg font-semibold text-white sm:text-xl">
                A note from our founder
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                Learnplex was born out of a simple observation during my time at
                UC Berkeley: the most effective learning tools are often the
                hardest to access. As I prepared to enter the professional world
                of Data & AI, I wanted to build a space where students could gain
                real-world experience while building tools that help others
                succeed.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                The bridge between Berkeley and industry — I now work in Data &
                AI at Deloitte Consulting LLP — is proof that the mission works:
                hands-on building and mentorship create sustainable pathways into
                tech. <strong className="text-white">Michael Florip</strong> is a
                Berkeley-trained engineer dedicated to ensuring the next
                generation doesn&apos;t have to choose between access and
                opportunity.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

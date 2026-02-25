/**
 * Learnplex Education — Open-source lab single-page site.
 * Sections: Nav, Hero, About the Lab, Lab Tracks, Tiered Mentorship, FAQ, Footer.
 * Public-benefit foundation style (Mozilla/Apache). Commented for student contributors.
 */

import Link from "next/link";
import { Unlock, Rocket, HeartHandshake, Shield, Sparkles, Briefcase, Users, GraduationCap, Linkedin, Instagram } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import PlexBackground from "@/components/PlexBackground";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 font-sans">
      {/* ─── Hero: full-bleed Plex under navbar, centered card ─── */}
      <section className="relative flex min-h-screen min-w-full flex-col items-center justify-center overflow-visible px-6 py-20 sm:py-28">
        {/* Full-bleed wrapper: 100vw so Plex spans entire viewport, no border/clip */}
        <div className="absolute inset-0 left-1/2 z-0 min-h-full w-screen -translate-x-1/2 overflow-visible">
          <PlexBackground />
        </div>
        {/* Subtle ambient light + gradient overlay (no rounded border) */}
        <div
          className="pointer-events-none absolute inset-0 left-1/2 z-[1] min-h-full w-screen -translate-x-1/2 overflow-visible bg-[radial-gradient(ellipse_80%_80%_at_100%_0%,rgba(99,102,241,0.2),transparent_50%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 left-1/2 z-[1] min-h-full w-screen -translate-x-1/2 overflow-visible bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/90"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-4xl">
          <div className="animate-hero-glow flex flex-col items-center justify-center rounded-3xl border border-slate-700/50 bg-slate-900/30 p-8 text-center shadow-lg shadow-indigo-500/10 backdrop-blur-xl sm:p-10">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Building the Future of Open-Source Education.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-loose text-slate-400">
              Learnplex is a student-powered open-source lab building high-utility
              learning tools while empowering the next generation of engineers and
              product leaders.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@learnplex.org"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Join the Waitlist
              </a>
              <Link
                href="#tracks"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-700 px-6 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                See Our Work
              </Link>
              <a
                href="https://github.com/learnplex-education/learnplex-main"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-700 px-6 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── About the Lab: mission (vision) and methodology (Experimentation to Publication) ─── */}
      <section
        id="About"
        className="animate-fade-in border-t border-slate-800 px-4 py-10 opacity-0 sm:px-6 sm:py-16"
        aria-labelledby="about-heading"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 id="about-heading" className="text-center text-lg font-semibold text-white sm:text-xl md:text-2xl">
            About the Lab
          </h2>
          <p className="mt-2 text-center text-sm text-slate-500">
            Registered 501(c)(3) · Student-Led
          </p>
          <p className="mt-4 text-center text-sm leading-relaxed text-slate-400 sm:mt-6 sm:text-base">
            A student-powered open-source lab building high-utility learning
            tools while empowering the next generation of engineers and product
            leaders.
          </p>
          <Link
            href="/about"
            className="group mt-8 block rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700 sm:mt-10"
          >
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <Unlock
                  className="h-8 w-8 text-slate-500 transition-colors duration-300 group-hover:text-indigo-400"
                  aria-hidden
                />
                <h3 className="mt-3 text-base font-semibold text-white transition-colors duration-300 group-hover:text-indigo-400 sm:text-lg">
                  Educational Equity
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Open-access, ad-free tools that remove financial barriers so
                  every student can learn and build.
                </p>
              </div>
              <div>
                <Rocket
                  className="h-8 w-8 text-slate-500 transition-colors duration-300 group-hover:text-indigo-400"
                  aria-hidden
                />
                <h3 className="mt-3 text-base font-semibold text-white transition-colors duration-300 group-hover:text-indigo-400 sm:text-lg">
                  Professional Launchpad
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Ship production-grade software and build high-signal portfolios
                  that open doors.
                </p>
              </div>
              <div>
                <HeartHandshake
                  className="h-8 w-8 text-slate-500 transition-colors duration-300 group-hover:text-indigo-400"
                  aria-hidden
                />
                <h3 className="mt-3 text-base font-semibold text-white transition-colors duration-300 group-hover:text-indigo-400 sm:text-lg">
                  Community Mentorship
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  A pay-it-forward model connecting students with industry pros
                  for real feedback and growth.
                </p>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <span className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-600 px-4 text-sm font-medium text-slate-300 transition-colors group-hover:border-indigo-500 group-hover:text-indigo-400">
                Learn More
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ─── Lab Tracks: Core Interns (infrastructure) and Product Fellows (innovation) ─── */}
      <section
        id="tracks"
        className="animate-fade-in border-t border-slate-800 px-6 py-14 opacity-0 sm:py-16"
        aria-labelledby="programs-heading"
        style={{ animationDelay: "0.15s" }}
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="programs-heading" className="text-center text-xl font-semibold text-white sm:text-2xl">
            Lab Tracks
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Two tracks, one lab: infrastructure and product innovation built by
            students, for students.
          </p>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <Link
              href="/internship"
              className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700"
            >
              <Shield className="h-8 w-8 text-slate-400 group-hover:text-indigo-400" aria-hidden />
              <h3 className="mt-3 text-lg font-semibold text-white transition-colors group-hover:text-indigo-400">
                Internship Program
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                The architects of the Lab. These students manage and develop the core
                platform, deployment pipelines, and internal tools.
              </p>
              <span className="mt-4 inline-flex h-10 items-center justify-center rounded-lg border border-slate-600 px-4 text-sm font-medium text-slate-300 transition-colors group-hover:border-indigo-500 group-hover:text-indigo-400">
                Learn More & Apply
              </span>
            </Link>
            <Link
              href="/fellowship"
              className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700"
            >
              <Sparkles className="h-8 w-8 text-slate-400 group-hover:text-indigo-400" aria-hidden />
              <h3 className="mt-3 text-lg font-semibold text-white transition-colors group-hover:text-indigo-400">
                FuturePlex Fellowship
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                The researchers. These students work in cross-functional squads
                to build specific tools that run on the platform Core Interns
                maintain.
              </p>
              <span className="mt-4 inline-flex h-10 items-center justify-center rounded-lg border border-slate-600 px-4 text-sm font-medium text-slate-300 transition-colors group-hover:border-indigo-500 group-hover:text-indigo-400">
                Learn More & Apply
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Tiered Mentorship: 3-pillar card (Industry, Peer-to-Peer, Sustainable Community) ─── */}
      <section
        className="animate-fade-in border-t border-slate-800 px-6 py-14 opacity-0 sm:py-16"
        aria-labelledby="mentorship-heading"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="mentorship-heading" className="text-center text-xl font-semibold text-white sm:text-2xl">
            Tiered Mentorship
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            From industry experts to lead interns to alumni — a pay-it-forward
            model so every contributor can ship.
          </p>
          <div className="group mt-10 rounded-3xl border border-slate-800 bg-slate-900/50 p-8 transition-colors hover:border-slate-700">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <Briefcase
                  className="h-8 w-8 text-slate-500 transition-colors duration-300 group-hover:text-indigo-400"
                  aria-hidden
                />
                <h3 className="mt-3 text-base font-semibold text-white transition-colors duration-300 group-hover:text-indigo-400 sm:text-lg">
                  Industry Insights
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Architecture reviews and career coaching from our professional
                  network, including specialists from firms like Deloitte.
                </p>
              </div>
              <div>
                <Users
                  className="h-8 w-8 text-slate-500 transition-colors duration-300 group-hover:text-indigo-400"
                  aria-hidden
                />
                <h3 className="mt-3 text-base font-semibold text-white transition-colors duration-300 group-hover:text-indigo-400 sm:text-lg">
                  Peer-to-Peer
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Daily guidance from Lead Interns who provide &quot;in-the-trenches&quot;
                  code reviews, technical support, and project management.
                </p>
              </div>
              <div>
                <GraduationCap
                  className="h-8 w-8 text-slate-500 transition-colors duration-300 group-hover:text-indigo-400"
                  aria-hidden
                />
                <h3 className="mt-3 text-base font-semibold text-white transition-colors duration-300 group-hover:text-indigo-400 sm:text-lg">
                  Sustainable Community
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  A pay-it-forward model where experienced builders return to
                  mentor the next generation, ensuring every project can ship.
                </p>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="rounded-lg border border-slate-700 px-6 py-2 text-white transition-all hover:bg-slate-800"
              >
                Become a Mentor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ: accordion dropdowns with new content and card styling ─── */}
      <section
        id="FAQ"
        className="animate-fade-in border-t border-slate-800 px-6 py-14 opacity-0 sm:py-16"
        aria-labelledby="faq-heading"
        style={{ animationDelay: "0.25s" }}
      >
        <div className="mx-auto max-w-2xl">
          <h2 id="faq-heading" className="text-center text-xl font-semibold text-white sm:text-2xl">
            FAQ
          </h2>
          <div className="mt-10">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* ─── Transparency Footer: 501(c)(3) ID, GitHub, copyright ─── */}
      <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        <div className="flex justify-center gap-6">
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-slate-400 transition-colors hover:text-white"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        <p className="mt-4">© 2026 Learnplex Education. A 501(c)(3) nonprofit.</p>
        <p className="mt-4">
          <a
            href="https://github.com/learnplex-education/learnplex-main"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-slate-500 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
          >
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

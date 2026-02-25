"use client";

/**
 * FAQ Accordion — single-open dropdowns with chevron and indigo active state.
 * Wrapped in one card; each question has px-6 py-4 for an airy layout.
 */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What exactly is a \"Student-Powered Open-Source Lab\"?",
    answer:
      "It is a professional engineering environment where students lead the development of open-source educational technology. We operate as a 501(c)(3) nonprofit, meaning our goal is social impact rather than profit.",
  },
  {
    question: "Internship vs. FuturePlex Fellowship: Which is for me?",
    answer:
      "Interns (Software Engineering, Product Design, etc.) focus on Learnplex's core infrastructure and internal tools. Fellows work in cross-functional squads to research and launch new, innovative educational tools on the platform.",
  },
  {
    question: "What level of experience is required?",
    answer:
      "Interns should have relevant technical or design experience (e.g., previous internships or advanced projects) as they maintain our core systems. Fellows can have less experience; a personal project or a few relevant classes are enough to start contributing.",
  },
  {
    question: "How does this help my career if the roles are unpaid?",
    answer:
      "We bridge the \"experience gap.\" You gain high-signal portfolio pieces, work within professional CI/CD pipelines, and receive direct mentorship from industry professionals, including specialists from top firms like Deloitte.",
  },
  {
    question: "What is the time commitment?",
    answer:
      "Commitment depends on your role. Interns typically contribute 8–12 hours per week. Fellowships are highly customizable based on availability, with a minimum requirement of 4 hours per week.",
  },
  {
    question: "Do I have to be a UC Berkeley student to apply?",
    answer:
      "While our roots are in Berkeley, we welcome any current undergraduate or Master's student from an accredited US university or college. You must be currently enrolled to be eligible for an Internship or Fellowship.",
  },
  {
    question: "I'm a professional; how can I get involved?",
    answer:
      "We offer flexible volunteer roles for Industry Mentors. You can lead architecture reviews, provide career coaching, or host \"Guest Lab\" sessions to share industry best practices with our students.",
  },
  {
    question: "Why is Learnplex a 501(c)(3) nonprofit?",
    answer:
      "This status codifies our commitment to educational equity. It ensures our tools remain ad-free and open-access, and allows us to accept tax-deductible donations to fund our digital infrastructure.",
  },
  {
    question: "Are the tools you build free to use?",
    answer:
      "Yes. Everything we ship is open-source and ad-free to ensure financial status never dictates a student's ability to access high-quality learning technology.",
  },
  {
    question: "Where does funding for the Lab go?",
    answer:
      "100% of funding goes toward our digital infrastructure—hosting costs, domain management, and the internal tools required to keep the Learnplex platform running for students.",
  },
] as const;

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 overflow-hidden">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        const isLast = index === FAQ_ITEMS.length - 1;
        return (
          <div
            key={index}
            className={isLast ? undefined : "border-b border-slate-800/80"}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-slate-800/30"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span
                className={`text-base font-semibold transition-colors duration-200 ${
                  isOpen ? "text-indigo-400" : "text-white hover:text-indigo-400"
                }`}
              >
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-indigo-400" : "text-slate-400"
                }`}
                aria-hidden
              />
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="border-t border-slate-800/80 bg-slate-800/20 px-6 py-4 text-sm leading-relaxed text-slate-400">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

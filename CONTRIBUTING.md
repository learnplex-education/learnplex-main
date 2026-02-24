# Contributing to Learnplex Education

This guide is the **Standard Operating Procedure (SOP)** for anyone joining the organization. Whether you’re an Engineering Intern or an EdTech Fellow, follow these roles, task assignment rules, and workflow.

---

## The Roles

Learnplex runs two distinct contributor paths:

| Role | Focus |
|------|--------|
| **Engineering Interns** | Direct contributors to **Learnplex Core** — the main website, deployment pipelines, and internal tools. |
| **EdTech Fellows** | Project-based contributors who build the **Learning Tools** that interns help deploy and maintain. |

Interns own the core product and infrastructure; Fellows own the educational applications and experiences that run on that foundation.

---

## Task Assignment

- **Interns** — Work on issues labeled **`Internship: Core`** in this repository and in core-related repos. These cover the main site, styling, metadata, deployment, and internal tooling.
- **Fellows** — Work on **project-specific repositories** under the [Learnplex organization](https://github.com/learnplex-education). Pick tasks from the Fellowship Roadmap and the issues in the repo for the learning tool you’re building.

Check the GitHub Project Board (**Fellowship Roadmap 2026**) and issue labels to see what’s available for your role.

---

## GitHub Labeling Guide

Use these labels to keep work searchable and consistent across the Learnplex organization.

- **Intern tasks** — Label with **`Role: Intern`**. These focus on **core infrastructure** and the **main website**.
- **Fellow tasks** — Label with **`Role: Fellow`**. These focus on **individual EdTech products**.
- **Difficulty / onboarding** — Use **`good first issue`** for beginner-friendly tasks.
- **Urgency**
  - **Immediate fixes** — Use **`bug`** (red).
  - **New features / improvements** — Use **`enhancement`** (blue/green).

---

## Workflow: Branch → PR → Review

**Both roles use the same process:**

1. **Create a feature branch**  
   Branch from `main` (or the default branch of the repo you’re in). Do not commit directly to `main`.

2. **Submit a Pull Request**  
   Open a PR with a clear title and description of what you changed and why.

3. **Wait for review**  
   Michael will review your PR. Address any feedback; then your changes will be merged.

**Difference in scope:**  
- **Interns** have a higher level of access to **core site styling and metadata** (e.g. `app/layout.tsx`, global styles, deployment config). Fellows typically contribute within their project repo’s scope.  
- When in doubt about whether a change belongs in Core vs. a learning-tool repo, ask in the issue or in your PR.

---

## Coding Standards

- **Keep code clean** — Clear names, small functions, minimal nesting.
- **Document with comments** — Add brief comments above logical blocks and non-obvious sections so future contributors can follow the code.
- **Use the existing stack** — Build with **Tailwind CSS** and **Next.js** (App Router). No new frameworks or libraries without approval.

---

## Communication

- **Questions about a task?** Leave a comment on the **GitHub Issue** for that task. Michael or other maintainers will respond there.
- **General questions?** Open a new Discussion or Issue as appropriate.

We’re glad you’re here. Happy building.

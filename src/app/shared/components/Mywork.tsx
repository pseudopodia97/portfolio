import Container from "./Container";

const work = [
  {
    title: "AI delivery agents",
    body: "An MR review agent that runs twice a day with rules learned from 1,200+ past review comments and production escapes, plus an auto-fixer for simple findings.",
    tags: ["Claude", "GitLab CI", "Agents"],
  },
  {
    title: "Spec-driven AI development",
    body: "A team process where every ticket carries an intent spec, so AI-written code matches what was agreed. Mandatory Playwright and unit tests per MR, tracked in Qase.",
    tags: ["Guardrails", "Playwright", "Qase"],
  },
  {
    title: "Context for AI assistants",
    body: "Detailed CLAUDE.md files for the app and every module, plus reusable AI skills for release readiness, self-review and root-cause analysis.",
    tags: ["CLAUDE.md", "AI skills"],
  },
  {
    title: "Web performance",
    body: "Cut the main app's initial bundle by 57%, with per-chunk size budgets that fail production builds before regressions ship.",
    tags: ["Angular", "Webpack", "CI budgets"],
  },
  {
    title: "Testing and observability",
    body: "Moved E2E to Playwright: post-release runs from 2 hours to 20 minutes, weekly regression under 1 hour, daily sanity runs alerting Teams. Grafana Faro with backend correlation IDs and live Lighthouse metrics.",
    tags: ["Playwright", "Grafana Faro", "Lighthouse"],
  },
  {
    title: "Rebrand and design system",
    body: "Led a rebrand across the main app, login app and website, with a tokenized design system that AI agents use to prototype features, halving build time.",
    tags: ["Design tokens", "Theming", "React"],
  },
  {
    title: "Learner app from scratch",
    body: "Built the Next.js learner application end to end, with AI feedback streaming and video responses, and took it to production.",
    tags: ["Next.js", "React", "Streaming"],
  },
  {
    title: "Releases and security",
    body: "Own the sprint release across three regions, hotfixes and client-facing RCAs. Led remediation of all critical pen-test findings: CSP, token handling and auth hardening.",
    tags: ["Release", "Security", "Unleash", "AWS CDK"],
  },
];

const MyWork = () => {
  return (
    <div className="bg-black">
      <Container>
        <h2 className="text-6xl text-gray-300 font-bold w-fit mb-4">What I <br />built at iluminr</h2>
        <p className="text-gray-300 mb-8">A selection of work from a crisis-management SaaS platform, built by a small team split between Sydney and India.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {work.map((w) => (
            <div key={w.title} className="bg-neutral-900 border-t-4 border-yellow-400 p-6">
              <p className="text-gray-200 font-bold text-xl mb-3">{w.title}</p>
              <p className="text-gray-400 mb-4">{w.body}</p>
              <div className="flex flex-wrap gap-4 gap-y-2">
                {w.tags.map((t) => (
                  <span key={t} className="text-white text-sm border-solid border-b-2 border-yellow-500">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MyWork;

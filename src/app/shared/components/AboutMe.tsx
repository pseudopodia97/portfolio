import Container from "./Container";

const skillGroups = [
  { label: "Frontend", items: ["React", "Next.js", "Angular (8 to 17)", "TypeScript", "JavaScript", "Micro-frontends", "Tailwind CSS", "RxJS", "Accessibility (WCAG)"] },
  { label: "AI and tooling", items: ["AI agents", "Claude Code", "CLAUDE.md context", "Reusable AI skills", "Spec-driven development"] },
  { label: "Quality", items: ["Playwright", "Jest", "TDD", "Qase", "CI quality gates", "Grafana Faro", "Lighthouse"] },
  { label: "Delivery", items: ["AWS (S3, CloudFront, CDK)", "GitLab CI", "GitHub Actions", "Unleash", "Node.js"] },
];

const AboutMe = () => {
  return (
    <div className="w-full bg-neutral-900">
      <Container>
        <div className="bg-neutral-900 py-4">
          <h1 className="text-5xl text-center font-bold text-gray-300 mb-10">My skills</h1>
          <div className="grid grid-cols-12 gap-8">
            {skillGroups.map((g) => (
              <div key={g.label} className="col-span-12 sm:col-span-6">
                <p className="text-yellow-400 mb-3">{g.label}</p>
                <div className="flex flex-wrap gap-4 gap-y-2">
                  {g.items.map((i) => (
                    <span key={i} className="text-white border-solid border-b-4 border-yellow-500">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;

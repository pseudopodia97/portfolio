import Container from "./Container";

const myExperiences = [
  {
    org: "iluminr",
    role: "Senior Frontend Developer",
    skills: ["Angular", "React", "Next.js", "TypeScript", "Micro-frontends", "Playwright", "AI agents", "Grafana Faro", "AWS"],
    highlights: [
      "Own the sprint release across three regions, including hotfixes and client-facing root-cause analyses.",
      "Built AI agents and a spec-driven AI workflow with mandatory tests per MR.",
      "Cut the main app's initial bundle by 57% and set CI performance budgets.",
    ],
    duration: "Nov 2024 - Present",
    location: "Remote · Sydney, AU",
  },
  {
    org: "Gojoko Technologies",
    role: "Senior Frontend Developer",
    skills: [
      "Angular 17",
      "Tailwind CSS",
      "Bootstrap",
      "AWS",
      "Git",
      "Jira",
      "Figma",
      "Lightning Web Components (Salesforce)",
      "Content Management System",
    ],
    duration: "May 2022 - Oct 2024",
    location: "Noida",
  },
  {
    org: "IBM India Pvt. Ltd.",
    role: "Application Developer",
    skills: ["Angular 8", "SQL", "Git", "CRM Tool", "Java", "Spring Boot"],
    duration: "June 2019 - April 2022",
    location: "Mumbai",
  },
];

const MyExperience = () => {
  return (
		<div className="bg-black">
    <Container>
      <h2 className="text-6xl text-gray-300 font-bold w-fit mb-4">My <br />Experience</h2>
			<p className="text-gray-300 mb-8">For 7+ years I&apos;ve built frontend products across SaaS, FinTech and banking, from an early-stage startup to IBM. Today I lead frontend work on a micro-frontend platform (Angular shell with React micro-frontends) and build AI agents and guardrails that help a small team ship quickly without breaking production.</p>
			<div className="mb-6">
				{myExperiences.map((exp) => {
					return (
						<div
							key={exp.org}
							className="mb-6 border-double border-s-4 ps-6 pb-8"
						>
							<div className="flex justify-between mb-4">
								<p className="text-white font-bold text-gray-300 text-2xl">{exp.org}</p>
								<p className="text-yellow-400">{exp.duration}</p>
							</div>
							<p className="text-gray-400 -mt-3 mb-4">{exp.role} &middot; {exp.location}</p>
							{exp.highlights && (
								<ul className="text-gray-300 list-disc ms-5 mb-4 space-y-1">
									{exp.highlights.map((h) => <li key={h}>{h}</li>)}
								</ul>
							)}
							<div className="w-full sm:w-3/4 flex flex-wrap gap-4 gap-y-2 bg-black">
								{exp.skills.map((skill) => {
									return (
										<span key={skill} className="text-white border-solid border-b-4 border-yellow-500">
											{skill} &nbsp; &nbsp;
										</span>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
    </Container>
		</div>
  );
};

export default MyExperience;

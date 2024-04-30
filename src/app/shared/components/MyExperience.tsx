import Container from "./Container";

const myExperiences = [
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
    duration: "May 2022 - Present",
    location: "Noida",
  },
  {
    org: "IBM India Pvt. Ltd.",
    role: "Frontend Developer",
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
			<p className="text-gray-300 mb-8">For the past 5 years, I&apos;ve honed my skills as a Software Development Engineer specializing in front-end development. My experience lies primarily within the FinTech and banking sectors, building user-facing applications for clients in these domains. I&apos;m proficient in industry-standard technologies like Angular, Next.js, AWS cloud services, Git version control, CRM systems, and Tailwind CSS for rapid UI development. This experience equips me to seamlessly integrate into your front-end development team and contribute effectively to your projects.</p>
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

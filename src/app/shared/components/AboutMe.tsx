'use client'
import Container from "./Container";
import ParticlesComponent from "./particles.js";
import ProgressBar from "./ProgressBar";

const AboutMe = () => {
	const skillData = [{label:"HTML", level:90},{label:"CSS", level:70},{label: "Javascript", level: 70},{label:"Angular", level: 80}, {label:"Next.js", level: 50}, {label: "Git", level:80}, {label: "React", level: 60}, {label: "Figma", level: 70}]
	return(
		<div className="w-full bg-neutral-900">
			{/* <div className="" id="particles-js"> */}
				<Container>
					<div className="bg-neutral-900 py-4">
						<h1 className="text-5xl text-center font-bold text-gray-300">My skills</h1>
						<div className="grid grid-cols-12">
								{skillData.map((skill, index) => {
									return (
										<div  key={index} className="col-span-12 sm:col-span-6">
											<ProgressBar progress={skill.level} label={skill.label} />
										</div>
									)
								})
							}
						</div>
					</div>
				</Container>
				{/* <ParticlesComponent/> */}
			{/* </div> */}
		</div>
	)
	}

export default AboutMe;
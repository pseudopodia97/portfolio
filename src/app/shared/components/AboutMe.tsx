'use client'
import Container from "./Container";
import ParticlesComponent from "../../shared/components/particles.js";
import ProgressBar from "./ProgressBar";
import Image from "next/image";

const AboutMe = () => {
	const skillData = [{label:"HTML", level:90},{label:"CSS", level:70},{label: "Javascript", level: 70},{label:"Angular", level: 80}, {label: "Git", level:80}, {label: "React", level: 60}, {label: "Figma", level: 70}]
	return(
		<div className="w-full">
			<div className="" id="particles-js">
				<Container styles="bg-neutral-900">
					<h1 className="text-5xl text-center font-bold text-gray-600">My skills</h1>
					
					<div className="grid grid-cols-12">
							{skillData.map((skill, index) => {
								return (
									<div  key={index} className="col-span-6">
										<ProgressBar progress={skill.level} label={skill.label} />
									</div>
								)
							})
						}
					</div>
				</Container>
				<ParticlesComponent/>
			<div className="h-12 mt-28 flex font-bold justify-center bg-yellow-500 content-center">
				<a className="flex items-center" href="tel:8408879840">Phone : +91 8408879840 </a> <p className="flex items-center">&nbsp; | &nbsp;</p> <a className="flex items-center" href="email:sarthakchitade@gmail.com">sarthakchitade@gmail.com</a>
			</div>
			{/* <div className="logos">
				<div className="inline-block logos-slide">
					<div className="h-32 gap-x-28 mt-28 no-scrollbar w-full">
						<Image className="h-28 inline-block object-cover" src="/TS_logo.png" alt="logo" width="320" height="320"/>
						<Image className="h-28 inline-block object-cover" src="/angular_logo.png" alt="logo" width="320" height="320"/>
						<Image className="h-28 inline-block object-cover" src="/next_logo.png" alt="logo" width="320" height="320"/>
						<Image className="h-28 inline-block object-cover" src="/analytics_logo.png" alt="logo" width="320" height="320"/>
						<Image className="h-28 inline-block object-cover" src="/git_logo.jpeg" alt="logo" width="320" height="320"/>
						<Image className="h-28 inline-block object-cover" src="/aws_logo.jpeg" alt="logo" width="320" height="320"/>
						<Image className="h-28 inline-block object-cover" src="/rxjs_logo.jpeg" alt="logo" width="320" height="320"/>
					</div>
				</div>
				<div className="inline-block logos-slide">
					<div className="h-32 gap-x-28 mt-28 no-scrollbar w-full">
						<Image className="h-28 inline-block" src="/angular_logo.png" alt="logo" width="320" height="320"/>
						<Image className="h-28 inline-block" src="/TS_logo.png" alt="logo" width="320" height="320"/>
						<Image className="h-28 inline-block" src="/next_logo.png" alt="logo" width="320" height="320"/>
						<Image className="h-28 inline-block" src="/analytics_logo.png" alt="logo" width="320" height="320"/>
						<Image className="h-28 inline-block" src="/git_logo.jpeg" alt="logo" width="320" height="320"/>
						<Image className="h-28 inline-block" src="/aws_logo.jpeg" alt="logo" width="320" height="320"/>
						<Image className="h-28 inline-block" src="/rxjs_logo.jpeg" alt="logo" width="320" height="320"/>
					</div>
				</div>
			</div> */}
			</div>
		</div>
	)
	}

export default AboutMe;
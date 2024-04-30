import Image from "next/image";
import Container from "./Container";

const WhatIDo = () => {
  return (
		<div className="bg-neutral-900">
			<Container>
				<div className="my-24">
					<h2 className="text-3xl w-full mx-auto text-center text-yellow-400 font-bold mb-8">
						Tools and Technologies <br /> Im good at
					</h2>
					<div className="flex flex-wrap justify-center w-full sm:w-1/2 mx-auto gap-6">
						<Image src="/javascript.svg" alt="icon" height="50" width="50"></Image>
						<Image src="/typescript.svg" alt="icon" height="50" width="50"></Image>
						<Image src="/angular.svg" alt="icon" height="50" width="50"></Image>
						<Image src="/react.svg" alt="icon" height="50" width="50"></Image>
						<Image src="/nextjs.svg" alt="icon" height="50" width="50"></Image>
						<Image src="/figma.svg" alt="icon" height="50" width="50"></Image>
						<Image src="/git.svg" alt="icon" height="50" width="50"></Image>
						<Image src="/npm.svg" alt="icon" height="50" width="50"></Image>
						<Image src="/rxjs.svg" alt="icon" height="50" width="50"></Image>
						<Image src="/aws.svg" alt="icon" height="50" width="50"></Image>
					</div>
				</div>
			</Container>
		</div>
  );
};

export default WhatIDo;

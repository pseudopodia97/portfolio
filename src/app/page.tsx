import Banner from "./shared/components/Banner";
import AboutMe from "./shared/components/AboutMe";
import MyExperience from "./shared/components/MyExperience";
import WhatIDo from "./shared/components/WhatIDo";
import MyWork from "./shared/components/Mywork";
import Impact from "./shared/components/Impact";

export default function Home() {
  return (
    <>
      <Banner/>
      <Impact/>
      <MyExperience/>
      <MyWork/>
      <AboutMe/>
      <WhatIDo/>
    </>
  );
}

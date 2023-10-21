import BackendSkill from "./Backend";
import FrontendSkill from "./Frontend";
import OtherSkill from "./Others";
import GraphicSkill from "./UIUX";

export default function Skills() {
  return (
    <>
      <div className="container mx-auto text-center">
        <h1 className="text-2xl" id="skills">
          Skills
        </h1>
        <p>Here are some of my skills on which I have been working on</p>
        <div className="flex flex-wrap justify-center gap-7">
          <FrontendSkill />
          <BackendSkill />
          <GraphicSkill />
          <OtherSkill />
        </div>
      </div>
    </>
  );
}

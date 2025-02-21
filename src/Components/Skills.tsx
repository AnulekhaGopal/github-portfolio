import skills from "../assets/skills.json";

type Skill = {
  sectionName: string;
  description: string;
};

function Skills() {
  const skillList: Skill[] = skills;

  return skillList.map((s) => {
    return (
      <>
        <div>{s.sectionName}</div>
        <div>{s.description}</div>
      </>
    );
  });
}

export default Skills;

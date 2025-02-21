import experience from "../assets/experience.json";

type Experience = {
  companyName: string;
  title: string;
  duration: string;
  description: string;
};

function Experience() {
  const expList: Experience[] = experience;

  return expList.map((exp) => {
    return (
      <div>
        <div>{exp.companyName}</div>
        <div>{exp.title}</div>
        <div>{exp.duration}</div>
        <div>{exp.description}</div>
      </div>
    );
  });
}

export default Experience;

import projects from "../assets/projects.json";

type Project = {
  name: string;
  company: string;
  technologies: string;
  diagram: string;
  description: string;
};

function Projects() {
  const projectList: Project[] = projects;
  return projectList.map((p) => {
    return (
      <div>
        <div>{p.name}</div>
        <div>{p.company}</div>
        <div>{p.technologies}</div>
        <div>{p.description}</div>
        <div>{p.diagram}</div>
      </div>
    );
  });
}

export default Projects;

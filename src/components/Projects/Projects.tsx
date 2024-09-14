import { ProjectsProps } from "./Projects.types";

const Projects = (props: ProjectsProps) => {
  const { title } = props;

  return (
    <div className="">
      <h1>{title ?? "Projects"}</h1>
    </div>
  );
};

export default Projects;

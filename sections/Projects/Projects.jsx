import "./projects.css";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/utils";

function Project() {
  return (
    <section className="projects" id="projects">
      <div className="content-wrapper">
        <h2>Projects</h2>
        <div className="projects-wrapper">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              note={project.note}
              image={project.image}
              tech={project.tech}
              github={project.github}
              url={project.url}
              download={project.download}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;

import { ProjectFan } from "@/components/project-fan";
import { projectsHeading } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-ink py-16 md:justify-start md:py-0"
    >
      <h2 id="projects-heading" className="sr-only">
        {projectsHeading}
      </h2>

      <p
        aria-hidden="true"
        className="type-display px-6 text-center normal-case text-cream text-[clamp(3rem,13.5vw,12.5rem)] md:absolute md:top-[24%] md:left-0 md:w-full md:px-0"
      >
        {projectsHeading}
      </p>

      <div className="mt-10 md:absolute md:top-[46%] md:left-0 md:mt-0 md:w-full">
        <ProjectFan />
      </div>
    </section>
  );
}

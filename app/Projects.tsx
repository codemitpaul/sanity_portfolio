import Image from "next/image";
import { urlFor } from "../lib/sanity";

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  console.log(projects);

  return (
    <section id="projects" className="p-5 sm:p-10">
      <div className="w-20 sm:w-40 h-1 bg-gradient-to-r from-rose-500 to-violet-500 rounded-full" />
      <h1 className="text-gradient py-10">Projekte</h1>
      <p className="text-lg font-light w-96">
        Diese Projekte sind auf Youtube zu finden. Klicke auf das Bild, um auf
        das Projekt zu gelangen.
      </p>

      <p className="text-lg font-bold w-96">
        Verfolge meinen Kanal und lasse Dich zum{" "}
        <span className="text-gradient text-lg">Experten</span> ausbilden.
      </p>
      <p className="text-sm text-gray-500 font-light italic w-full pt-2">
        Stufen (1-5): Neuling - Anfänger - Kenner - Könner - Experte
      </p>
      <div className="flex overflow-x-scroll py-5 w-full scrollbar-hide space-x-5 xl:grid xl:px-5  xl:gap-x-10 xl:gap-y-10 xl:space-x-0 xl:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className="w-[400px] flex-shrink-0 flex flex-col justify-between bg-violet-100 dark:bg-slate-800 pb-5 rounded-xl"
          >
            <a href={project.url}>
              <div className="w-full h-52 relative">
                <Image
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  fill
                  className="object-cover object-left hover:scale-105"
                />
              </div>
            </a>
            <div className="pt-5 px-8">
              <div>
                <h3 className="text-xl font-bold">
                  {index + 1}. {project.title}
                </h3>
                <p className="text-sm text-gray-500 italic">
                  {project.difficulty === 1
                    ? "Neuling"
                    : project.difficulty === 2
                    ? "Anfänger"
                    : project.difficulty === 3
                    ? "Kenner"
                    : project.difficulty === 4
                    ? "Könner"
                    : "Experte"}
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-5">
                {project.stacks.map((stack, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex items-center space-x-1">
                      <Image
                        src={urlFor(stack.mainImage).url()}
                        alt={stack.title}
                        width={20}
                        height={20}
                      />
                      <span className="text-xs font-gray-500 font-light">
                        {stack.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

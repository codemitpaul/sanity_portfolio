import Image from "next/image";
import { urlFor } from "../lib/sanity";
import StackItem from "./StackItem";

interface Props {
  generalCategories: GeneralCategory[];
}

const Technologies = ({ generalCategories }: Props) => {
  const colors = [
    "text-yellow-500",
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-violet-500",
    "text-orange-500",
    "text-zinc-500",
    "text-lime-500",
  ];

  return (
    <section id="technologies" className="p-5 sm:p-10">
      <div className="w-20 sm:w-40 h-1 bg-gradient-to-r from-rose-500 to-violet-500 rounded-full" />
      <h1 className="text-gradient py-10">Technologien</h1>
      <p className="text-lg font-light w-96">
        Ich habe mit einer Vielzahl von Technologien im Bereich der
        Webentwicklung gearbeitet.
      </p>
      <div className="flex overflow-x-scroll py-5 w-full scrollbar-hide space-x-5">
        {generalCategories.map((category) => (
          <div
            key={category._id}
            className="flex flex-col justify-between h-60 sm:h-72 w-80 sm:w-96 flex-shrink-0 shadow  dark:shadow-gray-500 bg-violet-100 dark:bg-slate-800 py-2 px-3 rounded-xl"
          >
            <div>
              <h3
                className={`text-${category.color}-500 text-lg sm:text-xl font-bold pb-2`}
              >
                {category.title}
              </h3>
              <p className="text-xs sm:text-sm font-light">
                {category.description}
              </p>
            </div>
            <div>
              {" "}
              <p className="self-start pt-3 pb-1 font-semibold">
                Meine Erfahrung mit{" "}
                <span className={`text-${category.color}-500`}>
                  {category.title}
                </span>
                ...
              </p>
              <div className="flex items-center space-x-4">
                {category.stacks.map((stack, index) => (
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

export default Technologies;

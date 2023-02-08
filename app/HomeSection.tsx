import { ChevronDownIcon } from "@heroicons/react/24/solid";
import BackgroundAnimation from "./BgAnimation";

const HomeSection = () => {
  return (
    <section id="home" className="section">
      <div className="grid grid-cols-1 gap-10 w-full h-full justify-center items-center relative">
        <BackgroundAnimation />
        <div>
          <h1 className="text-gradient">Willkommen</h1>
          <h2 className="text-gradient">bei Code mit Paul</h2>
          <p className="text-xl my-5 max-w-xl">
            Der Zweck von Code mit Paul ist es, aufstrebenden und etablierten
            Entwicklern zu helfen, ihre Entwicklungsfähigkeiten auf die nächste
            Stufe zu heben und fantastische Anwendungen zu entwickeln.
          </p>
          <a
            href="https://www.youtube.com/channel/UCvEySWEheAzIPqbnl4uZuyw"
            className="button"
          >
            Mehr Erfahren
          </a>
        </div>
      </div>
      <div className="bottom-2 left-1/2 absolute">
        <a href="#video">
          <ChevronDownIcon className="h-7 w-7" />
        </a>
      </div>
    </section>
  );
};

export default HomeSection;

import Link from "next/link";
import { GrCloudlinux } from "react-icons/gr";
import { SocialIcon } from "react-social-icons";
import DarkModeButton from "./DarkModeButton";

interface Props {
  socialIcons: SocialIcon[];
}

function Header({ socialIcons }: Props) {
  return (
    <header className="flex items-center justify-between z-20 bg-violet-100 text-zinc-800 dark:text-white dark:bg-zinc-900 px-5 py-3 shadow-lg h-[60px] sticky top-0">
      <Link
        href="/"
        className="font-light text-lg tracking-widest flex items-center space-x-1"
      >
        <span>CMP</span>
        <i>
          <GrCloudlinux className="h-4 w-4" />
        </i>
      </Link>

      <div className="hidden space-x-5 sm:flex items-center">
        <a href="#video" className="text-sm font-light">
          Videos
        </a>
        <a href="#technologies" className="text-sm font-light">
          Technologien
        </a>
        <a href="#about" className="text-sm font-light">
          Über mich
        </a>
        <a href="#projects" className="text-sm font-light">
          Projekte
        </a>
        <a href="#contact" className="text-sm font-light">
          Kontakt
        </a>
      </div>
      {/*  */}
      <div className="flex items-center space-x-2">
        {socialIcons.map((icon) => (
          <SocialIcon
            url={icon.url}
            bgColor="black"
            fgColor="white"
            style={{ width: 30, height: 30 }}
          />
        ))}
        <DarkModeButton />
      </div>
    </header>
  );
}

export default Header;

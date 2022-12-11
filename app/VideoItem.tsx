import Image from "next/image";
import { urlFor } from "../lib/sanity";
import StackItem from "./StackItem";

interface Props {
  video: Video;
}

const VideoItem = ({ video }: Props) => {
  const buttonName = video.title.split(" ")[0];
  console.log(video.stacks);

  return (
    <div className="w-full relative rounded-t-lg flex flex-col justify-between items-center space-y-5 bg-violet-100 border border-violet-300 dark:border-gray-600 dark:bg-slate-800 rounded-xl">
      <div>
        <div className="w-[350px] sm:w-full h-52 relative">
          <Image
            src={urlFor(video.mainImage).url()}
            alt="Todo App"
            fill
            className="object-cover object-left rounded-t-lg"
          />
        </div>
        <div className="px-5 py-3 flex flex-col items-center space-y-5">
          <h1 className="text-sm sm:text-lg font-semibold text-gradient text-center">
            {video.title}
          </h1>
          <div className="border-b border-gray-500 w-40 h-4"></div>
        </div>
      </div>
      <div className="px-5 py-3 flex flex-col items-center space-y-5">
        <div className="flex flex-col items-center">
          <p className="text-xs text-center line-clamp-6">
            {video.description}
          </p>
          <h2 className="text-xl pb-2">Verwendete Stack</h2>
          <div className="flex items-center space-x-4 overflow-x-scroll scrollbar-hide">
            {video.stacks.map((stack, index) => (
              <div key={index} className="flex items-center flex-shrink-0">
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
        <a
          href={video.url}
          className="text-sm text-center bg-gradient-to-tr from-orange-400 to-orange-600 text-white p-2 rounded-lg hover:opacity-80 w-full hover:"
        >
          {buttonName} anschauen
        </a>
      </div>
    </div>
  );
};

export default VideoItem;

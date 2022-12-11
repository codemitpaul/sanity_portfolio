"use client";

import { useState } from "react";
import Videos from "./Videos";

interface Props {
  videos: Video[];
  stacks: Stack[];
}

const VideoSection = ({ videos, stacks }: Props) => {
  const options = stacks.map((stack) => ({
    value: stack.title.toLocaleLowerCase(),
    label: stack.title,
  }));

  const [filteredVideos, setFilteredVideos] = useState(videos);

  const filterVideosHandler = (e: any) => {
    const selectedStack = e.target.value;
    if (selectedStack === "all") {
      setFilteredVideos(videos);
      return;
    }
    const newVideos: Video[] = [];
    videos.map((video) =>
      video.stacks.filter((stack) => {
        if (stack.title.toLowerCase().trim() === selectedStack) {
          newVideos.push(video);
        }
      })
    );
    setFilteredVideos(newVideos);
  };

  return (
    <section id="video" className="p-5 sm:p-10">
      <div className="w-20 sm:w-40 h-1 bg-gradient-to-r from-rose-500 to-violet-500 rounded-full" />
      <h1 className="text-gradient py-10">Meine Youtube Videos</h1>
      {/* <Select
        defaultValue={"python" || "Auswählen"}
        options={options}
        className="bg-violet-100 text-slate-800 mb-5"
      /> */}
      <select
        name=""
        id=""
        onChange={(e) => filterVideosHandler(e)}
        defaultValue="Alle Anzeigen"
        className="w-full mb-5 px-2 text-sm py-2 rounded-xl outline-none bg-violet-100 dark:bg-slate-800"
      >
        <option value="all">Alle Anzeigen</option>
        {stacks.map((stack) => (
          <option key={stack._id} value={stack.title.toLowerCase().trim()}>
            {stack.title}
          </option>
        ))}
      </select>
      {filteredVideos.length > 0 ? (
        <Videos videos={filteredVideos} />
      ) : (
        <p className="text-sm italic text-gray-300">
          Dazu gibt es noch keine Videos.
        </p>
      )}
    </section>
  );
};

export default VideoSection;

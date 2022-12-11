import VideoItem from "./VideoItem";

interface Props {
  videos: Video[];
}

function Videos({ videos }: Props) {
  return (
    <div className="h-full w-full flex overflow-x-scroll space-x-10 scrollbar-hide sm:grid sm:grid-cols-2 sm:gap-10 sm:space-x-0 lg:grid-cols-3 xl:grid-cols-4">
      {videos?.map((video) => (
        <VideoItem key={video._id} video={video} />
      ))}
    </div>
  );
}

export default Videos;

import { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prevLoaded) => prevLoaded + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div
          className="mask-clip-path absolute-center absulate z-50 size-64 cursor-pointer 
          overflow-hidden rounded-lg"
        >
          <div
            className="orign-center scale-50 opacity-0 transition-all duration-500 ease-in-out hover:scale-100 hover:opacity-100"
            onClick={handleMiniVdClick}
          >
            <video
              ref={nextVideoRef}
              src={getVideoSrc(upcomingVideoIndex)}
              loop
              muted
              id="current-video"
              className="size-64 orign-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          </div>

          {/* <div>MiniVideoPlayer</div> */}
        </div>
        <video
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          loop
          muted
          id="current-video"
          className="size-64 orign-center scale-150 object-cover object-center"
          onLoadedData={handleVideoLoad}
        />
      </div>
    </div>
  );
};

export default Hero;

const VideoGallery = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="relative rounded-lg shadow-lg bg-gray-100">
        <video className="w-full h-auto" src="/path/to/video1.mp4" controls />
        <div className="absolute bottom-0 left-0 p-4 bg-gray-800 text-white w-full">
          Video 1 Title
        </div>
      </div>
      <div className="relative rounded-lg shadow-lg bg-gray-100">
        <video className="w-full h-auto" src="/path/to/video2.mp4" controls />
        <div className="absolute bottom-0 left-0 p-4 bg-gray-800 text-white w-full">
          Video 2 Title
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;

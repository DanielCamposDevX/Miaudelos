'use client';
import EntranceVideo from '@/assets/videos/entrance.mp4';
import useVideo from '@/hooks/useVideo';

export default function VideoLogin() {
  const { handleVideoEnd, videoExist, videoFadeOut, videoRef } =
    useVideo(EntranceVideo);
  if (!videoExist) {
    return null;
  }
  return (
    <video
      ref={videoRef}
      src={EntranceVideo}
      autoPlay
      muted
      onClick={handleVideoEnd}
      onEnded={handleVideoEnd}
      className="w-full object-cover absolute top-0 left-0 z-10 bg-black/50"
      style={{
        transition: 'opacity 1s cubic-bezier(0.85, 0, 0.15, 1)',
        opacity: videoFadeOut ? 0 : 1,
      }}
    />
  );
}

'use client';
import useVideo from '@/hooks/useVideo';

export default function VideoLogin({
  Video,
  loop,
}: {
  Video: string;
  loop?: boolean;
}) {
  const { handleVideoEnd, videoExist, videoFadeOut, videoRef } = useVideo();
  if (!videoExist) {
    return null;
  }
  return (
    <video
      ref={videoRef}
      src={Video}
      autoPlay
      muted
      loop={loop}
      onClick={!loop ? handleVideoEnd : undefined}
      onEnded={handleVideoEnd}
      className="w-full object-cover absolute top-0 left-0 z-10 bg-black/50"
      style={{
        transition: 'opacity 1s cubic-bezier(0.85, 0, 0.15, 1)',
        opacity: videoFadeOut ? 0 : 1,
      }}
    />
  );
}

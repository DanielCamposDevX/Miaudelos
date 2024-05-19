'use client';
import useVideo from '@/hooks/useVideo';
import Image, { StaticImageData } from 'next/image';

export default function VideoLogin({ Video }: { Video: StaticImageData }) {
  const { handleVideoEnd, videoExist, videoFadeOut, videoRef } = useVideo();
  if (!videoExist) {
    return null;
  }
  return (
    <Image
      alt="loading gif"
      src={Video}
      unoptimized
      ref={videoRef}
      onClick={handleVideoEnd}
      style={{
        transition: 'opacity 1s cubic-bezier(0.85, 0, 0.15, 1)',
        opacity: videoFadeOut ? 0 : 1,
        position: 'absolute',
        top: 0,
        left: 0,
        objectFit: 'cover',
        height: '100%',
        zIndex: 11,
      }}
    />
  );
}

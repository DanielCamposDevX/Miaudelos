import { useRef, useState } from 'react';

export default function useVideo() {
  const [videoFadeOut, setVideoFadeOut] = useState(false);
  const [videoExist, setVideoExist] = useState(true);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setVideoFadeOut(true);
    setTimeout(() => {
      setVideoExist(false);
    }, 1000);
  };

  return { videoFadeOut, videoExist, videoRef, handleVideoEnd };
}

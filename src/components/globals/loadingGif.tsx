'use client';
import { CircularProgress } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LoadingGifs() {
  const [gif, setGif] = useState('');

  useEffect(() => {
    randomGif().then(setGif);
  }, []);

  return gif ? (
    <div className="absolute top-0 w-full h-full flex justify-center items-end py-4">
      <Image
        alt="loading gif"
        src={gif}
        unoptimized
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover',
          height: '100%',
          zIndex: 11,
        }}
      />
      <div className="z-20 bg-white p-3 rounded-lg border border-black flex justify-center items-center gap-2">
        Carregando <CircularProgress size={20} />
      </div>
    </div>
  ) : null;
}

async function randomGif() {
  const gifs = [
    'box.gif',
    'capybara.gif',
    'giftloading.gif',
    'hotspring.gif',
    'scanner.gif',
    'sus.gif',
    'boba.gif',
    'elair.gif',
    'dumplings.gif',
    'xmas.gif',
    'gachapom.gif',
    'mille.gif',
    'leaf.gif',
    'counter.gif',
  ];

  const randomIndex = Math.floor(Math.random() * gifs.length);
  const gif = gifs[randomIndex];
  const GIF = await import(`@/assets/videos/loadings/${gif}`);
  return GIF.default;
}

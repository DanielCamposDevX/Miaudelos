'use client';
import { CircularProgress } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const gifs = {
  'box.gif': require('@/assets/videos/loadings/box.gif'),
  'capybara.gif': require('@/assets/videos/loadings/capybara.gif'),
  'giftloading.gif': require('@/assets/videos/loadings/giftloading.gif'),
  'hotspring.gif': require('@/assets/videos/loadings/hotspring.gif'),
  'scanner.gif': require('@/assets/videos/loadings/scanner.gif'),
  'sus.gif': require('@/assets/videos/loadings/sus.gif'),
  'boba.gif': require('@/assets/videos/loadings/boba.gif'),
  'elair.gif': require('@/assets/videos/loadings/elair.gif'),
  'dumplings.gif': require('@/assets/videos/loadings/dumplings.gif'),
  'xmas.gif': require('@/assets/videos/loadings/xmas.gif'),
  'gachapom.gif': require('@/assets/videos/loadings/gachapom.gif'),
  'mille.gif': require('@/assets/videos/loadings/mille.gif'),
  'leaf.gif': require('@/assets/videos/loadings/leaf.gif'),
  'counter.gif': require('@/assets/videos/loadings/counter.gif'),
};

export default function LoadingGifs() {
  const gifs: { [key: string]: any } = {
    'box.gif': require('@/assets/videos/loadings/box.gif'),
    'capybara.gif': require('@/assets/videos/loadings/capybara.gif'),
    'giftloading.gif': require('@/assets/videos/loadings/giftloading.gif'),
    'hotspring.gif': require('@/assets/videos/loadings/hotspring.gif'),
    'scanner.gif': require('@/assets/videos/loadings/scanner.gif'),
    'sus.gif': require('@/assets/videos/loadings/sus.gif'),
    'boba.gif': require('@/assets/videos/loadings/boba.gif'),
    'elair.gif': require('@/assets/videos/loadings/elair.gif'),
    'dumplings.gif': require('@/assets/videos/loadings/dumplings.gif'),
    'xmas.gif': require('@/assets/videos/loadings/xmas.gif'),
    'gachapom.gif': require('@/assets/videos/loadings/gachapom.gif'),
    'mille.gif': require('@/assets/videos/loadings/mille.gif'),
    'leaf.gif': require('@/assets/videos/loadings/leaf.gif'),
    'counter.gif': require('@/assets/videos/loadings/counter.gif'),
  };

  const [gifSrc, setGifSrc] = useState(gifs['box.gif']);

  useEffect(() => {
    const loadRandomGif = async () => {
      const randomIndex = Math.floor(Math.random() * Object.keys(gifs).length);
      const gifKey = Object.keys(gifs)[randomIndex];
      setGifSrc(gifs[gifKey]);
    };

    loadRandomGif();
  }, []);

  return (
    <div className="absolute top-0 w-full h-full flex justify-center items-end py-4">
      <Image
        alt="loading gif"
        src={gifSrc}
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
  );
}

'use client';

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from "lucide-react"; // Import des icônes Lucide

interface FirstSectionWithVideosProps {
  name?: string;
  title: string;
  subTitle?: string;
  buttonOn?: boolean;
  video?: string;
  buttonText?: string;
  scrollTargetId?: string;
  setPlaying?: (isPlaying: boolean) => void;
  playing?: boolean;
}

const FirstSectionVideo: React.FC<FirstSectionWithVideosProps> = ({
  title,
  subTitle,
  name,
  video,
  setPlaying,
  playing,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if (!video) {
    return null;
  }


  const togglePlayPause = () => {
    if (setPlaying) {
      setPlaying(!playing);

      if (videoRef.current) {
        if (playing) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
      }
    }
  };

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden flex justify-center items-center">
      {/* Vidéo en arrière-plan */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src={video}
          autoPlay
          loop
          // muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full transition-opacity duration-1000"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-20 z-10" />

      {/* Contenu principal */}
      <div className="absolute inset-0 flex justify-center items-center z-20 px-6">

        {/* Texte et bouton */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
            {name}
          </h1>
          <h2 className="text-xl lg:text-3xl font-semibold mb-4 leading-snug">
            {title}
          </h2>
          {subTitle && (
            <div className='w-full flex justify-center flex-col'>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                {subTitle}

              </p>
              <Button
                className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition flex items-center justify-center"
                onClick={togglePlayPause}
                aria-label={playing ? "Pause Music & Video" : "Play Music & Video"} // Accessibilité
              >
                {playing ? <Pause size={24} /> : <Play size={24} />}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstSectionVideo;

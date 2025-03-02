"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";

const Lucas = () => {
  const images = [
    "/inside/none.png",
    "/inside/amoureux.png",
    "/inside/none.png",
    "/inside/danse.png",
    "/inside/deuil.png",
    "/inside/dino.png",
    "/inside/emménagement.png",
    "/inside/enretard.png",
    "/inside/mémé.png",
    "/inside/none.png",
    "/inside/ménage.png",
    "/inside/musclor.png",
    "/inside/porte.png",
    "/inside/simu.png",
  ];

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/queen.mp3");
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const togglePlayPause = () => {
    if (!audioRef.current || !videoRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      videoRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => console.log("Impossible de lire l'audio", error));
      videoRef.current.play().catch((error) => console.log("Impossible de lire la vidéo", error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen overflow-hidden">
      {/* Vidéo en arrière-plan */}
      <video
        ref={videoRef}
        src="https://videos.pexels.com/video-files/9524079/9524079-hd_1920_1080_30fps.mp4"
        playsInline
        className="absolute inset-0 object-cover w-full h-full brightness-50"
      />

      {/* Conteneur image + navigation */}
      <div className="relative w-[90%] max-w-lg md:max-w-3xl h-[700px] bg-white rounded-2xl shadow-xl overflow-hidden border border-white/30 flex items-center justify-center">
        {/* Image avec effet zoom et transition fluide */}
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-contain transition-transform duration-700 ease-in-out scale-105 hover:scale-110"
          layout="fill"
        />

        {/* Boutons de navigation */}
        <Button
          variant="ghost"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/60 p-3 rounded-full transition-all duration-300 backdrop-blur-lg shadow-lg"
          onClick={prevImage}
        >
          <ChevronLeft size={36} />
        </Button>

        <Button
          variant="ghost"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/60 p-3 rounded-full transition-all duration-300 backdrop-blur-lg shadow-lg"
          onClick={nextImage}
        >
          <ChevronRight size={36} />
        </Button>

        {/* Barre de progression */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[80%] h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-500"
            style={{ width: `${((currentIndex) / images.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Bouton Play/Pause flottant avec effet néon */}
      <Button
        className="absolute bottom-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border border-white/10 backdrop-blur-md"
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause Music & Video" : "Play Music & Video"}
      >
        {isPlaying ? <Pause size={28} /> : <Play size={28} />}
      </Button>
    </div>
  );
};

export default Lucas;

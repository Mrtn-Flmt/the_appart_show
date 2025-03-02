"use client";
import { useState, useEffect, useRef } from "react";
import FirstSectionVideo from "./components/FirstSectionVidéo";
import Description from "./components/Description";
import { SectionImages } from "./components/SectionImages";
import BuildingSection from "./components/buildingSection";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/queen.mp3"); // Charge le fichier audio
    audioRef.current.loop = true; // Permet de répéter la musique

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []); // Exécuté une seule fois au montage du composant

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => console.log("Impossible de lire l'audio", error));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center justify-center flex-col gap-12">
      <FirstSectionVideo
        setPlaying={toggleMusic}
        playing={isPlaying}
        buttonOn={false}
        title={"The Appart Show"}
        subTitle="Play me ! 🎵"
        video={"https://videos.pexels.com/video-files/9524079/9524079-hd_1920_1080_30fps.mp4"}
      />
      <Description />
      <SectionImages imageOne={"/inside/amoureux.png"} imageTwo={"/inside/danse.png"} />
      <SectionImages imageOne={"/inside/deuil.png"} imageTwo={"/inside/dino.png"} />
      <SectionImages imageOne={"/inside/emménagement.png"} imageTwo={"/inside/enretard.png"} />
      <SectionImages imageOne={"/inside/mémé.png"} imageTwo={"/inside/ménage.png"} />
      <SectionImages imageOne={"/inside/musclor.png"} imageTwo={"/inside/porte.png"} />
      <BuildingSection />
    </div>
  );
}

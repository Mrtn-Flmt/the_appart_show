import React, { useState, useEffect, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface FirstSectionProps {
  name?: string;
  title: string;
  subTitle?: string;
  images?: StaticImageData[];
  buttonOn?: boolean;
  video?: string;
}

const FirstSection: React.FC<FirstSectionProps> = ({ title, subTitle, images = [], name, buttonOn = false, video }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timer = 2500;

  const handleNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setNextImageIndex((currentImageIndex + 1) % images.length);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000);
    }
  }, [images.length, isTransitioning, currentImageIndex]);

  const handlePrev = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setNextImageIndex((currentImageIndex - 1 + images.length) % images.length);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setIsTransitioning(false);
      }, 1000);
    }
  }, [images.length, isTransitioning, currentImageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, timer);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden flex justify-center items-center">
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        />
      )}

      <div className="absolute inset-0 flex">
        <Image
          src={images[currentImageIndex]}
          alt={`View of background ${currentImageIndex}`}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-${isTransitioning ? '1000' : '[0ms]'} ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        />
        <Image
          src={images[nextImageIndex]}
          alt={`View of background ${nextImageIndex}`}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-20 z-10" />

      <div className='absolute inset-0 flex justify-between items-center z-20'>
        <Button
          variant="ghost"
          onClick={handlePrev}
          className="p-6 ml-2 hover:bg-gray-100 transition z-20"
          disabled={isTransitioning}
        >
          <ArrowLeft size={30} />
        </Button>
        <div className="relative z-30 flex flex-col justify-center items-center text-center">
          <h1 className="mb-2 text-4xl font-bold text-orange-400 animate__animated animate__fadeInDown">
            {name !== null ? name : "BIJ CLUB"}
          </h1>
          <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
          {subTitle && (
            <p className="text-lg text-center max-w-lg mb-6">{subTitle}</p>
          )}
          {buttonOn && <Button
            className="h-12 p-4 mt-10 bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold rounded-sm hover:scale-105 transition-transform duration-300"
          >
            <Link href={'/contact'}>
              Réservez dès maintenant
            </Link>
          </Button>}
        </div>
        <Button
          variant="ghost"
          onClick={handleNext}
          className="p-6 hover:bg-gray-100 transition z-20 mr-2"
          disabled={isTransitioning}
        >
          <ArrowRight size={30} />
        </Button>
      </div>
    </div>
  );
}

export default FirstSection;

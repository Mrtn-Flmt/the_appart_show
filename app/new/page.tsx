"use client";

import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  // 🔹 Assurer que le carrousel commence bien à l'index 0
  useEffect(() => {
    if (carouselRef.current) {
      const firstItem = carouselRef.current.querySelector(".carousel-item");
      if (firstItem) {
        firstItem.scrollIntoView({ behavior: "instant" });
      }
    }
  }, []);

  // 🔹 Désactiver le scroll de la page tant que toutes les images ne sont pas vues
  useEffect(() => {
    document.body.style.overflow = currentIndex < images.length - 1 ? "hidden" : "auto";
  }, [currentIndex]);

  // 🔹 Gestion du scroll pour défiler les images (desktop)
  useEffect(() => {
    const handleWheelScroll = (event: WheelEvent) => {
      if (isScrolling.current) return;

      event.preventDefault();
      isScrolling.current = true;

      if (event.deltaY > 0 && currentIndex < images.length - 1) {
        nextImage();
      } else if (event.deltaY < 0 && currentIndex > 0) {
        prevImage();
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    };

    window.addEventListener("wheel", handleWheelScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
    };
  }, [currentIndex]);

  // 🔹 Gestion du scroll tactile (mobile)
  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isScrolling.current) return;

      const touchEndY = event.touches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      if (Math.abs(deltaY) > 50) {
        event.preventDefault();
        isScrolling.current = true;

        if (deltaY > 0 && currentIndex < images.length - 1) {
          nextImage();
        } else if (deltaY < 0 && currentIndex > 0) {
          prevImage();
        }

        setTimeout(() => {
          isScrolling.current = false;
        }, 500);
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currentIndex]);

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      scrollToImage(currentIndex - 1);
    }
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      scrollToImage(currentIndex + 1);
    }
  };

  const scrollToImage = (index: number) => {
    if (carouselRef.current) {
      const items = carouselRef.current.querySelectorAll(".carousel-item");
      if (items[index]) {
        items[index].scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen overflow-hidden">
      <div ref={carouselRef} className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
        <Carousel className="w-full h-screen flex justify-center items-center">
          <CarouselContent className="w-full h-full max-w-screen overflow-hidden">
            {images.map((src, index) => (
              <CarouselItem key={index} className="carousel-item relative w-screen h-full flex items-center justify-center">
                <div className="relative w-[75vw] h-[75vh] flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    fill
                    className="object-contain transition-transform duration-700 ease-in-out"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Section suivante accessible après la dernière image */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={"/inside/simu.png"}
          alt="Image finale"
          width={1000}
          height={1000}
          className="object-contain transition-transform duration-700 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Lucas;

"use client";

import { FC, useEffect, useState } from "react";
// import logo from "@/app/favicon.png";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { StepForward } from "lucide-react";

const Header: FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPercent = Math.min(scrollY / (window.innerHeight * 0.5), 1);
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Accueil", ref: "/" },
    { name: "de", ref: "/de" },
    { name: "det", ref: "/det" },
    { name: "defutur", ref: "/defutur" },
    { name: "denew", ref: "/denew" },
  ];

  return (
    <header
      className={`header bg-black fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrollPercentage > 0 ? "scrolled" : ""
      }`}
    >
      <div className="flex items-center justify-between w-full py-4 px-8 h-20"> 
        <div className="flex items-center">
          <Button onClick={() => {
            window.location.href = "/";
          }} variant={"ghost"}  className="w-[60px] relative p-0 m-0 h-auto">
            <StepForward color="white" size={40} />
          </Button>
          <div
            className={`logo w-full flex justify-center text-xl font-bold text-white`}
          >
            🎶 THE APPART SHOW  🎶
          </div>
        </div>

        {/* Bouton Burger */}
        <button
          className={`lg:hidden text-2xl focus:outline-none text-white`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8 absolute lg:relative top-16 left-0 lg:top-0 w-full lg:w-auto ${
            isMenuOpen ? "bg-white" : "bg-transparent"
          } lg:bg-transparent shadow-lg lg:shadow-none py-4 lg:py-0 transition-all duration-300`}
        >
          {menuItems.map((item) => {
            const isActive =
              item.ref === "/"
                ? pathname === "/" // Vérification stricte pour la page d'accueil
                : pathname?.startsWith(item.ref); // Vérification pour les autres pages
            return (
              <a
                key={item.name}
                href={item.ref}
                className={`block font-semibold lg:inline-block text-sm px-8 py-2 lg:px-0 transition-colors duration-300 ${
                  scrollPercentage > 0 || isMenuOpen ? "text-black" : "text-white"
                } hover:text-orange-500 ${
                  isActive ? "text-orange-500" : ""
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;

"use client";

import Image from "next/image";
import { Facebook, Instagram, StepForward, Twitter } from "lucide-react";
import Link from "next/link";
import monsieurbonheur from "@/assets/monsieurbonheur.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-24 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0 space-y-8 lg:space-y-0">
        <div className="flex items-center space-x-4">
        <StepForward size={40} />
          <span className="text-lg font-semibold text-black">The appart show</span>
        </div>

        <div className="flex space-x-16">
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Notre Agence</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Qui sommes-nous ?</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Nos valeurs</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-gray-800">Contactez-nous</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Mentions légales</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">Nos projets</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 pt-8 flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto px-4 lg:px-0">
        <div className="bg-blue flex flex-row items-center relative">
          <div className="text-sm text-gray-500">
            © The appart show 2025. Développé avec passion par{" "}
            <Link
              href="mailto:mrtn.flmt@gmail.com"
              className="hover:text-gray-950 hover:underline"
            >
              Martin Flament - Hélène Ququ - Lucas Morlet
            </Link>
          </div>
          <div>
            <Image
              id="logo_vanish"
              src={monsieurbonheur}
              alt="Logo FLMTECH"
              className="rounded-lg object-cover opacity-0 transition-opacity duration-300 hover:opacity-100 ml-4 bottom-0"
              height={50}
              priority={true}
            />
          </div>
          <div>
            <Image
              id="logo_vanish"
              src={"https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png"}
              alt="Logo FLMTECH"
              className="rounded-lg object-cover opacity-0 transition-opacity duration-300 hover:opacity-100 ml-4 bottom-0"
              width={50}
              height={50}
              priority={true}
            />
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <a
            href="#"
            className="bg-gradient-to-r bg-white h-8 p-2 w-8 rounded-full flex items-center justify-center"
          >
            <Facebook />
          </a>
          <a
            href="#"
            className="bg-gradient-to-r bg-white h-8 p-2 w-8 rounded-full flex items-center justify-center"
          >
            <Instagram />
          </a>
          <a
            href="#"
            className="bg-gradient-to-r bg-white h-8 p-2 w-8 rounded-full flex items-center justify-center"
          >
            <Twitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

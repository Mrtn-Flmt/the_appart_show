"use client";

import Image from "next/image";

import Link from "next/link";
import monsieurbonheur from "@/assets/monsieurbonheur.png";

const Footer = () => {
  return (
    <footer className="bg-white py-10 mt-24 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0 space-y-8 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <Image
            src={"/inside/theappartshow.png"}
            alt="Martin"
            width={200}
            height={40}
            layout="cover"
            className="object-cover rounded-lg"
          />
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;

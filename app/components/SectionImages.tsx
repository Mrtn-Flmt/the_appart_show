import Image from "next/image";
import { FC } from "react";

type SectionImagesProps = {
  imageOne: string;
  imageTwo: string;
};

export const SectionImages: FC<SectionImagesProps> = ({ imageOne, imageTwo }) => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly w-3/4 mx-auto gap-4">
      <Image src={imageOne} width={300} height={400} alt="" className="w-full md:w-auto" />
      <Image src={imageTwo} width={300} height={400} alt="" className="w-full md:w-auto" />
    </div>
  );
};

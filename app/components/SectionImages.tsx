import Image from "next/image"
import Flex from "./Flex"
import { FC } from "react";

type SectionImagesProps = {
  imageOne: string,
  imageTwo: string
};

export const SectionImages: FC<SectionImagesProps> = ({imageOne, imageTwo}) => {
  return (
    <Flex className="justify-evenly w-3/4">
      <Image src={imageOne} width={300} height={400} alt={""} />
      <Image src={imageTwo} width={300} height={400} alt={""} />
    </Flex>
  )
}
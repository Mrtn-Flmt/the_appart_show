import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import assetOne from "@/assets/inside/amoureux.png";
import assetTwo from "@/assets/inside/danse.png";
import assetThree from "@/assets/inside/deuil.png";
import assetFour from "@/assets/inside/dino.png";
import assetFive from "@/assets/inside/emménagement.png";
import assetSix from "@/assets/inside/enretard.png";
import assetSeven from "@/assets/inside/mémé.png";
import assetEight from "@/assets/inside/ménage.png";
import assetNine from "@/assets/inside/musclor.png";
import assetTen from "@/assets/inside/porte.png";

const BuildingSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    assetOne.src,
    assetTwo.src,
    assetThree.src,
    assetFour.src,
    assetFive.src,
    assetSix.src,
    assetSeven.src,
    assetEight.src,
    assetNine.src,
    assetTen.src,
    assetNine.src,
    assetTen.src,
  ];

  const openModal = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <>
      {/* GRID DES BOUTONS */}
      <div className="grid grid-cols-4 grid-rows-3 gap-10">
        {images.map((image, index) => {
          if (index === images.length - 1) {
            return (<Button
              variant={"zoom"}
              key={index}
              onClick={() => openModal(image)}
              className="w-[150px] mt-4 h-[150px] flex items-center justify-center"
            >
              <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-contain rounded-md" />
            </Button>)
          }
          return (
            <Button
              variant={"zoom"}
              key={index}
              onClick={() => openModal(image)}
              className="w-[150px] h-[150px] flex items-center justify-center"
            >
              <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-contain rounded-md" />
            </Button>
          )
        })}
      </div>

      {/* MODALE */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          {selectedImage && (
            <img src={selectedImage} alt="Image sélectionnée" className="w-full h-auto rounded-md" />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BuildingSection;

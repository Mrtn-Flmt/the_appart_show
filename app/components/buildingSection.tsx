import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent  } from "@/components/ui/dialog";

const BuildingSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = 
  [
    "/inside/amoureux.png",
    "/inside/danse.png",
    "/inside/deuil.png",
    "/inside/dino.png",
    "/inside/emménagement.png",
    "/inside/enretard.png",
    "/inside/mémé.png",
    "/inside/ménage.png",
    "/inside/musclor.png",
    "/inside/porte.png",
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

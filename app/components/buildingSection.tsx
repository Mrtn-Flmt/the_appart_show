import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const BuildingSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
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
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <Button
            variant="ghost"
            key={index}
            onClick={() => openModal(image)}
            className="w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] flex items-center justify-center overflow-hidden"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </Button>
        ))}
      </div>

      {/* MODALE */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg sm:max-w-2xl w-full max-h-screen p-4 flex items-center justify-center overflow-hidden">
          {selectedImage && (
            <div className="flex items-center justify-center w-full h-full">
              <img
                src={selectedImage}
                alt="Image sélectionnée"
                className="w-full h-auto max-h-[80vh] object-contain rounded-md"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BuildingSection;

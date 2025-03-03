"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Jeudedest = () => {
  const [diceNumbers, setDiceNumbers] = useState([1, 1]);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (rolling) return;
    setRolling(true);
    
    let rolls = 10; // Nombre de roulements rapides avant l'arrêt
    const interval = setInterval(() => {
      setDiceNumbers([
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1,
      ]);
      rolls--;
      if (rolls === 0) {
        clearInterval(interval);
        setRolling(false);
      }
    }, 100);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black relative overflow-hidden">
      {/* Effet lumineux futuriste */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-20 blur-3xl" />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex flex-col items-center relative z-10 text-white">
          <h1 className="text-5xl font-extrabold mb-6 neon-text">Jeu de Dé</h1>
          <div className="flex gap-6">
            {diceNumbers.map((num, index) => (
              <motion.div
                key={index}
                animate={{ rotate: rolling ? 360 : 0, scale: rolling ? 1.2 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center justify-center w-24 h-24 bg-gray-900 text-white rounded-lg mb-4 shadow-2xl border-4 border-neon-blue text-5xl font-bold"
              >
                {num}
              </motion.div>
            ))}
          </div>
          <Button 
            onClick={rollDice} 
            disabled={rolling} 
            variant="zoom"
            className="hover:bg-neon-purple text-black bg-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all text-lg"
          >
            Lancer les Dés
          </Button>
        </div>
      </div>

      {/* Définition des couleurs néon */}
      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 10px #fff, 0 0 20px #00e6e6, 0 0 30px #00e6e6;
        }
        .border-neon-blue {
          border-color: #00e6e6;
          box-shadow: 0 0 15px #00e6e6;
        }
        .bg-neon-blue {
          background-color: #00e6e6;
          box-shadow: 0 0 15px #00e6e6;
        }
        .hover\:bg-neon-purple:hover {
          background-color: #d400ff;
          box-shadow: 0 0 15px #d400ff;
        }
      `}</style>
    </div>
  );
};

export default Jeudedest;
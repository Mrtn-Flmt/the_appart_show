"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Det = () => {
  const [diceNumber, setDiceNumber] = useState(1);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (rolling) return;
    setRolling(true);
    
    let rolls = 10; // Number of quick rolls before stopping
    const interval = setInterval(() => {
      setDiceNumber(Math.floor(Math.random() * 6) + 1);
      rolls--;
      if (rolls === 0) {
        clearInterval(interval);
        setRolling(false);
      }
    }, 100);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-white">Jeu de Dé</h1>
        <motion.div
          animate={{ rotate: rolling ? 360 : 0, scale: rolling ? 1.2 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center w-24 h-24 bg-white text-black rounded-full mb-4 shadow-lg border-4 border-yellow-400"
        >
          <span className="text-4xl font-bold">{diceNumber}</span>
        </motion.div>
        <Button 
          onClick={rollDice} 
          disabled={rolling} 
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg shadow-md transition-all"
        >
          Lancer
        </Button>
      </div>
    </div>
  );
};

export default Det;

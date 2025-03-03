"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const De = () => {
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
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">Jeu de Dé</h1>
        <motion.div
          animate={{ rotate: rolling ? 360 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center w-24 h-24 bg-gray-300 rounded-full mb-4 shadow-lg"
        >
          <span className="text-4xl font-bold">{diceNumber}</span>
        </motion.div>
        <Button onClick={rollDice} disabled={rolling}>Lancer</Button>
      </div>
    </div>
  );
};

export default De;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Denew = () => {
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
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white relative overflow-hidden">
      {/* Neon Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-32 h-32 bg-cyan-400 rounded-full blur-3xl opacity-40 top-10 left-20"></div>
        <div className="absolute w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-40 bottom-10 right-20"></div>
        <div className="absolute w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-40 bottom-1/3 left-1/3"></div>
      </div>
      <div className="flex flex-col items-center z-10">
        <h1 className="text-4xl font-bold mb-6 text-cyan-400 drop-shadow-[0_0_10px_#00FFFF]">Jeu de Dé</h1>
        <motion.div
          animate={{ rotate: rolling ? 360 : 0, scale: rolling ? 1.5 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center w-24 h-24 bg-black text-cyan-400 rounded-full mb-4 shadow-lg border-4 border-cyan-400 relative overflow-hidden drop-shadow-[0_0_15px_#00FFFF]"
        >
          <motion.span
            key={diceNumber}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-4xl font-bold absolute drop-shadow-[0_0_10px_#00FFFF]"
          >
            {diceNumber}
          </motion.span>
        </motion.div>
        <Button 
          onClick={rollDice} 
          disabled={rolling} 
          className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded-lg shadow-md transition-all drop-shadow-[0_0_10px_#00FFFF]"
        >
          Lancer
        </Button>
      </div>
    </div>
  );
};

export default Denew;

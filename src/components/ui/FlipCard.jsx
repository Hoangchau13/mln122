import React, { useState } from "react";
import { motion } from "framer-motion";

const FlipCard = ({ frontIcon: Icon, frontTitle, backContent, bgColor = "bg-primary" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-64 perspective-1000 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full preserve-3d relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front */}
        <div className={`absolute w-full h-full backface-hidden rounded-2xl shadow-lg border-2 border-transparent p-6 flex flex-col items-center justify-center text-center ${bgColor}`}>
          <div className="bg-white/20 p-4 rounded-full mb-4">
            <Icon size={48} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{frontTitle}</h3>
          <p className="text-white/80 text-sm mt-2">Chạm hoặc di chuột để xem</p>
        </div>

        {/* Back */}
        <div 
          className="absolute w-full h-full backface-hidden rounded-2xl shadow-lg bg-white border-2 border-gray-100 p-6 flex flex-col items-center justify-center text-center"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-lg font-medium text-gray-800">{backContent}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;

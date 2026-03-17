import React, { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const QuizMini = ({ question, options, correctAnswerIndex, explanation }) => {
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSelect = (index) => {
    if (selected !== null) return;
    setSelected(index);
    setIsCorrect(index === correctAnswerIndex);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 my-8 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <span className="bg-secondary text-navy font-bold px-3 py-1 rounded-full text-sm">Mini Quiz</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-6">{question}</h3>
      
      <div className="space-y-3">
        {options.map((option, index) => {
          let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center ";
          
          if (selected === null) {
            buttonClass += "border-gray-200 hover:border-primary hover:bg-red-50 text-gray-700";
          } else if (index === correctAnswerIndex) {
            buttonClass += "border-green-500 bg-green-50 text-green-700";
          } else if (selected === index) {
            buttonClass += "border-red-500 bg-red-50 text-red-700";
          } else {
            buttonClass += "border-gray-200 opacity-50 text-gray-500";
          }

          return (
            <motion.button
              key={index}
              whileTap={selected === null ? { scale: 0.98 } : {}}
              onClick={() => handleSelect(index)}
              className={buttonClass}
              disabled={selected !== null}
            >
              <span className="font-medium">{option}</span>
              {selected !== null && index === correctAnswerIndex && <CheckCircle className="text-green-500" />}
              {selected === index && index !== correctAnswerIndex && <XCircle className="text-red-500" />}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className={`mt-6 p-4 rounded-xl ${
              isCorrect ? "bg-green-50 text-green-800 border-l-4 border-green-500" : "bg-red-50 text-red-800 border-l-4 border-red-500"
            }`}
          >
            <p className="font-bold mb-1">{isCorrect ? "⭐ Chính xác!" : "❌ Chưa chính xác!"}</p>
            <p className="text-sm">{explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizMini;

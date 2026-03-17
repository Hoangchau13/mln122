import React from "react";
import { Quote } from "lucide-react";

const QuoteBox = ({ text, author }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md p-8 my-8 border-l-4 border-primary">
      <Quote className="absolute top-4 left-4 text-red-100" size={48} />
      <div className="relative z-10 pl-6">
        <p className="text-xl italic text-gray-700 font-medium leading-relaxed">
          "{text}"
        </p>
        {author && (
          <p className="mt-4 text-right font-semibold text-navy">
            - {author} -
          </p>
        )}
      </div>
    </div>
  );
};

export default QuoteBox;

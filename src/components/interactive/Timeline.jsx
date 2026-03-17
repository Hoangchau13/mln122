import React from "react";
import { motion } from "framer-motion";

const Timeline = ({ items }) => {
  return (
    <div className="relative border-l-4 border-red-200 ml-6 md:ml-12 pl-6 py-4 space-y-12">
      {items.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          {/* Icon node */}
          <div className="absolute -left-[45px] top-1 bg-white border-4 border-primary rounded-full p-2 w-12 h-12 flex items-center justify-center shadow-md">
            <item.icon className="text-primary w-6 h-6" />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;

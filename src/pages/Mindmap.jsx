import React from "react";
import { motion } from "framer-motion";
import { Network } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";

const mindmaps = [
  {
    title: "1. Vai trò của Lợi ích kinh tế",
    src: "/3 vai tro Loi ich A.png"
  },
  {
    title: "2. Tính chất 2 mặt của Quan hệ lợi ích",
    src: "/Tính chất 2 mặt.png"
  },
  {
    title: "3. Các nhân tố ảnh hưởng",
    src: "/nhân tố ảnh hưởng trong Quan hệ lợi ích.png"
  },
  {
    title: "4. Vai trò của Nhà nước",
    src: "/vai tro nha nuoc.jpg"
  }
];

const Mindmap = () => {
  return (
    <PageTransition className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center flex flex-col items-center"
      >
        <div className="flex items-center gap-3 mb-4 justify-center">
          <Network size={40} className="text-primary" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy">Sơ Đồ Tổng Hợp</h1>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl">
          Tổng hợp lại các kiến thức đã học trong chương 5.3 thông qua sơ đồ tư duy (Mindmap).
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {mindmaps.map((map, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 flex flex-col group overflow-hidden"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center border-b pb-3">{map.title}</h3>
            <div className="flex-grow flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden p-2 relative">
              <img 
                src={map.src} 
                alt={map.title} 
                className="max-w-full max-h-[600px] lg:max-h-[500px] object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a 
                  href={map.src} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-2 bg-white text-navy font-bold rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors"
                >
                  Xem ảnh lớn
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageTransition>
  );
};

export default Mindmap;

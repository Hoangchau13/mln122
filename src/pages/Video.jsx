import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import PageTransition from "../components/layout/PageTransition";

const Video = () => {
  return (
    <PageTransition className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center flex flex-col items-center"
      >
        <div className="flex items-center gap-3 mb-4 justify-center">
          <PlayCircle size={40} className="text-secondary" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-navy">Video Thuyết Trình</h1>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl">
          Xin mời xem video bài thực hành / thuyết trình của nhóm về "Các quan hệ lợi ích kinh tế ở Việt Nam".
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-2">
        <div className="aspect-video bg-black rounded-xl overflow-hidden relative group">
          <video 
            className="w-full h-full object-contain"
            controls
            autoPlay={false}
            preload="metadata"
          >
            <source src="/Lợi ích kinh tế.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
        </div>
      </div>
    </PageTransition>
  );
};

export default Video;

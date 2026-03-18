import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/layout/PageTransition";

const Hero = () => {
  return (
    <PageTransition className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-red-50 to-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block p-4 rounded-full bg-red-100 text-primary mb-6">
            <BookOpen size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            Các Quan Hệ <span className="text-primary">Lợi Ích Kinh Tế</span>
            <br /> Ở Việt Nam
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Chương 5.3 - Môn Chính trị - Kinh tế Mác - Lênin. Khám phá các khái niệm,
            bản chất và vai trò của lợi ích kinh tế cũng như vai trò của nhà nước.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/section-a"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-red-700 md:py-4 md:text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Bắt đầu học <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Hero;

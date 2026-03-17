import React from "react";
import { motion } from "framer-motion";
import { Building2, UserCircle2, Briefcase, TrendingUp } from "lucide-react";
import Card from "../components/ui/Card";
import QuoteBox from "../components/ui/QuoteBox";
import FlipCard from "../components/ui/FlipCard";
import QuizMini from "../components/interactive/QuizMini";
import PageTransition from "../components/layout/PageTransition";

const SectionA = () => {
  const quizData = {
    question: "Bản chất của lợi ích kinh tế là gì?",
    options: [
      "Là lợi nhuận của doanh nghiệp",
      "Là tiền lương của người lao động",
      "Phản ánh mục đích và động cơ của các quan hệ sản xuất",
      "Là sự cạnh tranh trên thị trường"
    ],
    correctAnswerIndex: 2,
    explanation: "Bản chất của lợi ích kinh tế phản ánh mục đích và động cơ của các quan hệ sản xuất. Lợi nhuận và tiền lương chỉ là biểu hiện cụ thể."
  };

  return (
    <PageTransition className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy">Lợi ích kinh tế</h1>
        </div>
        <p className="text-gray-600 text-lg">Khái niệm, bản chất và vai trò của lợi ích kinh tế</p>
      </motion.div>

      {/* Khái niệm */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-secondary pb-2 inline-block">1. Khái niệm</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card delay={0.1} className="bg-red-50 border-red-100">
            <h3 className="text-xl font-bold text-primary mb-3">Lợi ích kinh tế là gì?</h3>
            <p className="text-gray-700 leading-relaxed">
              Lợi ích kinh tế là <span className="font-bold text-primary">lợi ích vật chất</span> thu được từ hoạt động kinh tế của con người.
            </p>
          </Card>
          <Card delay={0.2} className="bg-blue-50 border-blue-100">
            <h3 className="text-xl font-bold text-navy mb-3">Tác dụng</h3>
            <p className="text-gray-700 leading-relaxed">
              Là <span className="font-bold text-navy">động lực thúc đẩy</span> hoạt động của các cá nhân, tổ chức và toàn xã hội trong sản xuất và kinh doanh.
            </p>
          </Card>
        </div>
      </section>

      {/* Bản chất & Biểu hiện */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-secondary pb-2 inline-block">2. Bản chất & Biểu hiện</h2>
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-red-600 to-primary text-white">
            <h3 className="text-xl font-bold mb-2">Bản chất</h3>
            <p className="text-white/90">Phản ánh mục đích và động cơ của các quan hệ sản xuất.</p>
          </Card>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Biểu hiện trong thực tế</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FlipCard
            frontIcon={Building2}
            frontTitle="Chủ doanh nghiệp"
            backContent="Biểu hiện lợi ích kinh tế của chủ doanh nghiệp là Lợi Nhuận."
            bgColor="bg-navy"
          />
          <FlipCard
            frontIcon={UserCircle2}
            frontTitle="Người lao động"
            backContent="Biểu hiện lợi ích kinh tế của người lao động là Thu Nhập / Tiền Lương."
            bgColor="bg-primary"
          />
        </div>
      </section>

      {/* Vai trò */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-secondary pb-2 inline-block">3. Vai trò (3 điểm chính)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card delay={0.1} className="text-center group hover:-translate-y-2 transition-transform">
            <div className="bg-red-100 p-4 rounded-full inline-block mb-4 group-hover:bg-primary transition-colors">
              <TrendingUp size={32} className="text-primary group-hover:text-white" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Động lực trực tiếp</h3>
            <p className="text-sm text-gray-600">Của hoạt động kinh tế - xã hội</p>
          </Card>

          <Card delay={0.2} className="text-center group hover:-translate-y-2 transition-transform">
            <div className="bg-blue-100 p-4 rounded-full inline-block mb-4 group-hover:bg-navy transition-colors">
              <Briefcase size={32} className="text-navy group-hover:text-white" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Cơ sở thúc đẩy</h3>
            <p className="text-sm text-gray-600">Các lợi ích khác (chính trị, văn hóa, xã hội)</p>
          </Card>

          <Card delay={0.3} className="text-center group hover:-translate-y-2 transition-transform">
            <div className="bg-yellow-100 p-4 rounded-full inline-block mb-4 group-hover:bg-secondary transition-colors">
              <UserCircle2 size={32} className="text-yellow-700 group-hover:text-yellow-900" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Cơ sở vật chất</h3>
            <p className="text-sm text-gray-600">Phục vụ đời sống nhân dân</p>
          </Card>
        </div>

        {/* <QuoteBox 
          text="Nước độc lập mà dân không hưởng hạnh phúc, tự do thì độc lập cũng chẳng có nghĩa lý gì."
          author="Chủ tịch Hồ Chí Minh"
        /> */}
      </section>
    </PageTransition>
  );
};

export default SectionA;

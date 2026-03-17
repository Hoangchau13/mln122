import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Pickaxe, Landmark, Globe2, PlusCircle, MinusCircle } from "lucide-react";
import Card from "../components/ui/Card";
import Timeline from "../components/interactive/Timeline";
import MindMap from "../components/interactive/MindMap";
import QuizMini from "../components/interactive/QuizMini";
import PageTransition from "../components/layout/PageTransition";

const SectionB = () => {
  const factors = [
    {
      title: "Trình độ phát triển của lực lượng sản xuất",
      description: "Là nhân tố quyết định nhất. Lực lượng sản xuất càng cao, năng suất lao động càng lớn, của cải xã hội dồi dào, từ đó lợi ích kinh tế càng được nâng cao.",
      icon: Pickaxe
    },
    {
      title: "Địa vị trong hệ thống quan hệ sản xuất xã hội",
      description: "Quyết định cách thức phân phối lợi ích. Doanh nghiệp và người lao động có địa vị khác nhau sẽ có phương thức và tỷ lệ hưởng lợi ích khác nhau.",
      icon: BrainCircuit
    },
    {
      title: "Chính sách phân phối thu nhập của nhà nước",
      description: "Là công cụ quan trọng để điều tiết và đảm bảo hài hòa lợi ích. Chính sách thuế, tiền lương, trợ cấp tác động trực tiếp đến thu nhập các giai tầng.",
      icon: Landmark
    },
    {
      title: "Hội nhập kinh tế quốc tế",
      description: "Mở rộng không gian hoạt động, tạo cơ hội gia tăng lợi ích kinh tế nhưng cũng mang lại rủi ro, phân hóa thu nhập.",
      icon: Globe2
    }
  ];

  const quizData = {
    question: "Các quan hệ lợi ích kinh tế cơ bản không bao gồm quan hệ nào dưới đây?",
    options: [
      "Người lao động và Người sử dụng lao động",
      "Lợi ích cá nhân, lợi ích nhóm và lợi ích xã hội",
      "Người tiêu dùng và Người sản xuất",
      "Những người sử dụng lao động với nhau"
    ],
    correctAnswerIndex: 2,
    explanation: "Quan hệ giữa Người tiêu dùng và Người sản xuất tuy có lợi ích nhưng không được liệt kê là một trong 4 quan hệ lợi ích kinh tế CƠ BẢN cốt lõi trong mục này."
  };

  return (
    <PageTransition className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Quan hệ lợi ích kinh tế</h1>
        </div>
        <p className="text-gray-600 text-lg">Sự tương tác, tính chất 2 mặt và các nhân tố ảnh hưởng</p>
      </motion.div>

      {/* Khái niệm & Tính 2 mặt */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-2 inline-block">1. Khái niệm & Tính chất hai mặt</h2>
        <Card className="mb-8 border-l-4 border-navy">
          <h3 className="text-xl font-bold text-navy mb-2">Khái niệm</h3>
          <p className="text-gray-700">Là sự thiết lập những tương tác giữa con người với con người, giữa các cộng đồng người, giữa các tổ chức kinh tế... nhằm xác lập các lợi ích kinh tế.</p>
        </Card>

        {/* So sánh */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-green-50/50 border-green-200 group hover:border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <PlusCircle className="text-green-600 w-8 h-8" />
              <h3 className="text-2xl font-bold text-green-700">Thống Nhất</h3>
            </div>
            <p className="text-gray-700 mb-4">Lợi ích này được thực hiện sẽ là điều kiện để lợi ích kia cũng được thực hiện.</p>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100 text-sm group-hover:bg-green-100/50 transition-colors">
              <strong>Ví dụ:</strong> Doanh nghiệp kinh doanh hiệu quả (lợi nhuận cao) {"=>"} Người lao động có việc làm và thu nhập ổn định.
            </div>
          </Card>

          <Card className="bg-red-50/50 border-red-200 group hover:border-red-500">
            <div className="flex items-center gap-3 mb-4">
              <MinusCircle className="text-red-600 w-8 h-8" />
              <h3 className="text-2xl font-bold text-red-700">Mâu Thuẫn</h3>
            </div>
            <p className="text-gray-700 mb-4">Sự gia tăng lợi ích của chủ thể này có thể làm tổn hại hoặc giảm sút lợi ích của chủ thể khác.</p>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-red-100 text-sm group-hover:bg-red-100/50 transition-colors">
              <strong>Ví dụ:</strong> Nếu quỹ tiền lương giảm (thu nhập giảm) {"=>"} Chủ doanh nghiệp có nhiều lợi nhuận hơn.
            </div>
          </Card>
        </div>
      </section>

      {/* Nhân tố ảnh hưởng */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-2 inline-block">2. Các nhân tố ảnh hưởng</h2>
        <Timeline items={factors} />
      </section>

      {/* Các quan hệ lợi ích cơ bản */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-2 inline-block">3. Các quan hệ lợi ích cơ bản</h2>
        <p className="text-gray-600 mb-4">Chạm vào từng hình khối để xem chi tiết các mối quan hệ quan trọng.</p>
        <MindMap />
      </section>

    </PageTransition>
  );
};

export default SectionB;

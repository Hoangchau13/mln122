import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Scale, ShieldCheck, HeartHandshake } from "lucide-react";
import Card from "../components/ui/Card";
import QuizMini from "../components/interactive/QuizMini";
import PageTransition from "../components/layout/PageTransition";

const SectionC = () => {
  const roles = [
    {
      title: "Bảo vệ lợi ích hợp pháp",
      subtitle: "Tạo môi trường thuận lợi",
      icon: ShieldCheck,
      color: "from-blue-500 to-blue-700",
      content: [
        "Giữ vững ổn định chính trị",
        "Xây dựng hệ thống pháp luật minh bạch",
        "Phát triển kết cấu hạ tầng kinh tế",
        "Tạo lập môi trường văn hóa phù hợp"
      ]
    },
    {
      title: "Điều hòa lợi ích",
      subtitle: "Cá nhân - Doanh nghiệp - Xã hội",
      icon: Scale,
      color: "from-green-500 to-green-700",
      content: [
        "Hoàn thiện chính sách phân phối thu nhập",
        "Ngăn chặn phân hóa, chênh lệch thu nhập quá đáng",
        "Phát triển mạnh mẽ lực lượng sản xuất"
      ]
    },
    {
      title: "Kiểm soát, ngăn ngừa",
      subtitle: "Quan hệ lợi ích tiêu cực",
      icon: ShieldAlert,
      color: "from-red-500 to-red-700",
      content: [
        "Chống 'lợi ích nhóm' và 'nhóm lợi ích' tiêu cực",
        "Xóa bỏ cơ chế 'xin - cho', 'duyệt - cấp'",
        "Chống tham nhũng, buôn lậu, hàng giả",
        "Thực hiện công khai, minh bạch"
      ]
    },
    {
      title: "Giải quyết mâu thuẫn",
      subtitle: "Trong quan hệ lợi ích",
      icon: HeartHandshake,
      color: "from-yellow-500 to-yellow-600",
      content: [
        "Phát hiện và giải quyết mâu thuẫn kịp thời",
        "Bảo đảm có sự tham gia của các bên liên quan",
        "Có sự nhân nhượng, nhượng bộ",
        "Nguyên tắc: Đặt lợi ích quốc gia, dân tộc lên trên hết"
      ]
    }
  ];

  const quizData = {
    question: "Để giải quyết mâu thuẫn trong quan hệ lợi ích kinh tế, nguyên tắc tối cao là gì?",
    options: [
      "Đặt lợi ích của người lao động lên trên hết",
      "Đặt lợi ích của doanh nghiệp lên trên hết",
      "Chỉ cần đàm phán dựa trên sự tự nguyện của hai bên",
      "Phải đặt lợi ích quốc gia, dân tộc lên trên hết"
    ],
    correctAnswerIndex: 3,
    explanation: "Dù cần có sự tham gia và nhân nhượng từ các bên, nguyên tắc tối cao nhất khi giải quyết mâu thuẫn lợi ích kinh tế là phải đặt lợi ích quốc gia, dân tộc lên trên hết."
  };

  return (
    <PageTransition className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Vai trò của Nhà nước</h1>
        </div>
        <p className="text-gray-600 text-lg">Đảm bảo hài hòa các quan hệ lợi ích kinh tế</p>
      </motion.div>

      {/* Khái niệm Hài hòa lợi ích */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-2 inline-block">1. Khái niệm &quot;Hài hòa lợi ích&quot;</h2>
        <Card className="bg-gradient-to-br from-light to-blue-50 border-blue-100">
          <p className="text-xl text-gray-800 leading-relaxed font-medium">
            Hài hòa lợi ích là tính <span className="text-primary font-bold">thống nhất biện chứng</span>, trong đó mâu thuẫn được hạn chế, sự thống nhất được tăng cường, tạo điều kiện cho các lợi ích cùng được thực hiện.
          </p>
        </Card>
      </section>

      {/* 4 Vai trò */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary pb-2 inline-block">2. Các vai trò chính của Nhà nước</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-72 md:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              {/* Front side / Default */}
              <div className={`absolute inset-0 bg-gradient-to-br ${role.color} p-8 flex flex-col justify-center items-center text-center transition-opacity duration-300 group-hover:opacity-0`}>
                <div className="bg-white/20 p-4 rounded-full mb-4">
                  <role.icon size={48} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{role.title}</h3>
                <p className="text-white/80 font-medium">{role.subtitle}</p>
                <span className="absolute bottom-4 text-white/50 text-sm">Chạm hoặc di chuột để xem chi tiết</span>
              </div>

              {/* Back side / Hover */}
              <div className={`absolute inset-0 bg-white border-2 border-gray-100 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <role.icon size={24} className="text-gray-500" />
                  {role.title}
                </h3>
                <ul className="space-y-3">
                  {role.content.map((item, i) => (
                    <li key={i} className="flex gap-2 text-gray-700">
                      <span className="text-primary font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </PageTransition>
  );
};

export default SectionC;

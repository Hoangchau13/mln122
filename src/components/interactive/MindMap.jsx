import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Network, Users, UserPlus, Globe } from "lucide-react";

const nodes = [
  {
    id: "n1",
    title: "NLĐ ↔ NSDLĐ",
    icon: Users,
    content: "Người lao động và Người sử dụng lao động: Quan hệ cơ bản nhất, cốt lõi trong nền kinh tế thị trường. Mua bán sức lao động.",
    color: "bg-blue-100 text-blue-700 border-blue-300"
  },
  {
    id: "n2",
    title: "NSDLĐ ↔ NSDLĐ",
    icon: Network,
    content: "Giữa những người sử dụng lao động: Cạnh tranh và hợp tác để tối đa hóa lợi nhuận. Vd: Các doanh nghiệp cùng ngành.",
    color: "bg-red-100 text-red-700 border-red-300"
  },
  {
    id: "n3",
    title: "NLĐ ↔ NLĐ",
    icon: UserPlus,
    content: "Giữa những người lao động: Vừa cạnh tranh việc làm, vừa đoàn kết tương trợ (Công đoàn, nghiệp đoàn).",
    color: "bg-green-100 text-green-700 border-green-300"
  },
  {
    id: "n4",
    title: "Cá nhân ↔ Nhóm ↔ Xã hội",
    icon: Globe,
    content: "Giữa lợi ích cá nhân, lợi ích nhóm và lợi ích toàn xã hội: Cần có sự hài hòa, lợi ích cá nhân là cơ sở, lợi ích xã hội là định hướng.",
    color: "bg-yellow-100 text-yellow-700 border-yellow-300"
  }
];

const MindMap = () => {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 my-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-50/50 -z-10" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Central Hub Connector Line Visual */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
        
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`cursor-pointer p-6 rounded-xl border-2 transition-all ${
              activeNode?.id === node.id ? "ring-4 ring-primary/20 scale-[1.02]" : "hover:border-primary/50"
            } ${node.color}`}
            onClick={() => setActiveNode(activeNode?.id === node.id ? null : node)}
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 rounded-full bg-white/60">
                <node.icon size={24} />
              </div>
              <h3 className="text-xl font-bold">{node.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeNode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8 p-6 bg-gray-900 text-white rounded-xl shadow-lg relative"
          >
            <button 
              onClick={() => setActiveNode(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <activeNode.icon size={20} className="text-secondary" />
              Chi tiết: {activeNode.title}
            </h4>
            <p className="text-gray-300 leading-relaxed text-lg">{activeNode.content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MindMap;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: "Trang chủ", path: "/" },
    { name: "Lợi ích", path: "/section-a" },
    { name: "Quan hệ lợi ích", path: "/section-b" },
    { name: "Vai trò nhà nước", path: "/section-c" },
    { name: "Video Nhóm", path: "/video" },
    { name: "Tổng kết (Mindmap)", path: "/mindmap" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Kinh Tế <span className="text-navy">Mác-Lênin</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-2 text-sm font-medium transition-colors ${location.pathname === link.path
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                  }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-primary"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import mainCert from "../assets/certificates/maincertificate.pdf"
import Anexcture from "../assets/certificates/Anexcture.pdf"
import Gov from "../assets/certificates/Gov.pdf"
import Udyam from "../assets/certificates/Udyam.pdf"
import Udyam2 from "../assets/certificates/Udyam2.pdf"
import WebWorld from "../assets/certificates/WEBWorld.pdf"
import Footer from "../components/Footer";


const certificates = [
  {
    title: "Web World Hub",
    issuer: "Web World Hub",
    file: mainCert,
  },
  {
    title: "Udyog Aadhaar",
    issuer: "Govt of India",
    file: Anexcture,
  },
  {
    title: "GST Certificate",
    issuer: "Govt of India",
    file: Gov,
  },
  {
    title: "Udyam Certificate",
    issuer: "Govt of India",
    file: Udyam,
  },
  {
    title: "Udyam Certificate",
    issuer: "Govt of India",
    file: Udyam2,
  },
];

const Certificate = () => {
  return (
    <>
     <div className="min-h-screen bg-gradient-to-r from-sky-100 to-blue-200 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">
          🎓 Certificates & Achievements
        </h1>
        <p className="text-gray-600 text-lg">
          Explore the professional certificates We've earned in various domains.
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/40 hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-full">
                <FileText size={22} />
              </div>
              <div className="text-left">
                <h2 className="text-lg font-semibold text-blue-800">{cert.title}</h2>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-4 italic">{cert.date}</p>

            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mb-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-600 transition"
            >
              View Certificate
            </a>

            <a
              href={cert.file}
              download
              className="flex items-center justify-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-900 transition"
            >
              <Download size={18} /> Download
            </a>
          </motion.div>
        ))}
      </div>
    </div>
    <div>
        <Footer/>
    </div>
    </>
   
    
  );
};

export default Certificate;

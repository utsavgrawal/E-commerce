import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Intro() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center overflow-hidden relative text-white">

      {/* 🔥 TOP SHUTTER */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-1/2 bg-gray-900 z-20"
      />

      {/* 🔥 BOTTOM SHUTTER */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-800 z-20"
      />

      {/* 🌟 GLOW BACKGROUND */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.3, opacity: 0.25 }}
        transition={{ duration: 2 }}
        className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-3xl"
      />

      {/* 🚀 CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="text-center z-30 px-6"
      >
        <h1 className="text-5xl font-bold mb-4 tracking-wide">
          MyStore
        </h1>

        <p className="text-gray-300 mb-6 max-w-md mx-auto">
          Discover amazing products with a smooth shopping experience  
          Fashion • Electronics • Lifestyle 🔥
        </p>

        <button
          onClick={() => navigate("/home")}
          className="bg-gradient-to-r from-pink-500 to-red-500 px-8 py-3 rounded-full hover:scale-105 transition"
        >
          Enter Store 🚀
        </button>
      </motion.div>

    </div>
  );
}

export default Intro;
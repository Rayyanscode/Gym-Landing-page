import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-2xl font-bold text-white">
            GymScanner
          </div>

          <nav className="hidden md:flex items-center space-x-6 font-medium text-white bg-[rgb(49,49,48)]/60 px-8 py-2 rounded-full shadow-md">
            <a href="#" className="hover:text-blue-400 transition">
              Find Trainers
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              How it Works
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              Become a Trainer
            </a>     
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-blue-700 transition">
              Login
            </button>
            <Button className="!bg-[#e4cb0a] !text-black hover:bg-blue-800 !rounded-full px-4">
              Signup
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black md:hidden z-40"
              onClick={handleClose}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg md:hidden z-50"
            >
              <div className="px-6 py-8 space-y-6">
                <a
                  href="#"
                  className="block text-lg text-gray-700 hover:text-blue-600"
                  onClick={handleClose}
                >
                  Find Trainers
                </a>
                <a
                  href="#"
                  className="block text-lg text-gray-700 hover:text-blue-600"
                  onClick={handleClose}
                >
                  How it Works
                </a>
                <a
                  href="#"
                  className="block text-lg text-gray-700 hover:text-blue-600"
                  onClick={handleClose}
                >
                  Become a Trainer
                </a>

                <div className="pt-4 border-t">
                  <Button
                    className="block w-full !bg-[#e4cb0a] text-black hover:text-blue-600 rounded-full px-6"
                    onClick={handleClose}
                  >
                    Signup
                  </Button>
                  <button
                    className="mt-3 w-full text-gray-700 hover:text-blue-600 transition"
                    onClick={handleClose}
                  >
                    Login
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

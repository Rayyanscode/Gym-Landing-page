import { motion } from "framer-motion";
import Button from "./Button";

export default function CallToAction() {
  return (
    <section className="px-2 sm:px-4 lg:px-8 py-10 bg-[#0c0d0c] text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="relative bg-cover bg-center bg-no-repeat rounded-[2rem] border border-gray-700 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#1c1c1c] overflow-hidden shadow-lg min-h-[420px]"
        style={{ backgroundImage: "url('/Group 59522.png')" }} 
      >
        
        <div className="absolute inset-0 bg-black/50"></div>
  
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative z-10 max-w-3xl mx-auto py-24 px-6 text-center flex flex-col items-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to dive in?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Signup, select your desired challenge account and get funded.
          </p>
          <Button className="mt-6 px-9 py-4 !bg-[#e4cb0a] text-black font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-[#d4bb00] transition duration-200">
            Get Funded
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

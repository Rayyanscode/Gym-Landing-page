import { motion } from "framer-motion";

export default function GymScannerSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-[#0c0d0c] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold leading-tight text-white"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          How Gymscanner works
        </motion.h2>

        <motion.p
          className="mt-3 text-base sm:text-lg text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Find a trainer or gym in just a few clicks
        </motion.p>

        <div className="mt-10 grid gap-12 sm:gap-16 sm:grid-cols-3 items-start">
          <motion.article
            className="flex flex-col items-center text-center p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex items-center justify-center">
              <img src="/Vector.png" className="w-30 h-30" alt="" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">Search Anywhere</h3>
            <p className="mt-2 text-sm text-gray-300">
              Enter your location, date, and training type
            </p>
          </motion.article>


          <motion.article
            className="flex flex-col items-center text-center p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex items-center justify-center">
              <img src="/Group 2.png" className="w-20 h-30" alt="" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">Compare &amp; Choose</h3>
            <p className="mt-2 text-sm text-gray-300">
              View top-rated gyms and trainers near you
            </p>
          </motion.article>


          <motion.article
            className="flex flex-col items-center text-center p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex items-center justify-center">
              <img src="/card-pos.png" className="w-30 h-20" alt="" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-white">Book instantly</h3>
            <p className="mt-2 text-sm text-gray-300">
              Reserve and pay securely — no commitment
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

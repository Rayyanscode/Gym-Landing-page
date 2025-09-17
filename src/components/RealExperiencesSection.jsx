import { motion } from "framer-motion";
import TestimonialCard from "./Card"; 


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function RealExperiencesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-[#0c0d0c] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Real Experiences From Real People
          </h2>
          <p className="mt-3 text-gray-300 text-base sm:text-lg">
            Hear from travelers and trainers using Gymscanner around the world
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div variants={cardVariants}>
            <TestimonialCard
              profileImg="/Rectangle 23.png"
              name="Samantha K."
              text="Found a gym near my Airbnb in Rome within minutes. Loved the flexibility!"
              rating={5}
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <TestimonialCard
              profileImg="/Rectangle 23.png"
              name="Michael T."
              rating={5}
              text="Booked a session in New York during a layover. Super convenient."
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <TestimonialCard
              profileImg="/Rectangle 23.png"
              name="Samantha K."
              rating={5}
              text="As a trainer, I’ve connected with travelers worldwide. Great exposure!"
            />
          </motion.div>

          <motion.div variants={cardVariants}>
            <TestimonialCard
              profileImg="/Rectangle 23.png"
              name="David L."
              rating={5}
              text="Explored new gyms in Tokyo hassle-free. Highly recommend!"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

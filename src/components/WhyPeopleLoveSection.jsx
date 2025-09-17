import { motion } from "framer-motion";

export default function WhyPeopleLoveSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-[#0c0d0c] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 xl:gap-32 items-center">
        
        <motion.div
          className="relative w-full h-full flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="/Builder.png"
            alt="Fitness"
            className="rounded-2xl object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center pl-0 lg:pl-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Why People Love Gymscanner
          </h2>
          <p className="mt-3 text-gray-300 text-base sm:text-lg">
            A smarter way to stay fit anywhere in the world
          </p>

          <motion.div
            className="mt-8 flex items-start gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src="/World.png" alt="Worldwide" className="w-12 h-12" />
            <div>
              <h3 className="text-lg font-medium text-white">Worldwide Access</h3>
              <p className="text-sm text-gray-300">
                Find gyms and trainers in 100+ cities
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-6 flex items-start gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src="/Membership.png" alt="No Membership" className="w-12 h-12" />
            <div>
              <h3 className="text-lg font-medium text-white">No Membership Required</h3>
              <p className="text-sm text-gray-300">
                Pay-per-person. No contracts, ever.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-6 flex items-start gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src="/Verified.png" alt="Verified" className="w-12 h-12" />
            <div>
              <h3 className="text-lg font-medium text-white">Verified Trainers &amp; Gyms</h3>
              <p className="text-sm text-gray-300">
                Curated professionals, rated by real users
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-6 flex items-start gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img src="/Instant.png" alt="Booking" className="w-12 h-12" />
            <div>
              <h3 className="text-lg font-medium text-white">Instant Booking</h3>
              <p className="text-sm text-gray-300">
                Book in minutes, with real-time availability
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

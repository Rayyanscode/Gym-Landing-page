import Button from "./Button";
import { useCallback } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("Search clicked");
  }, []);

  return (
    <section
      id="hero"
      className="relative bg-cover bg-center text-center text-white pt-60 pb-40 rounded-b-3xl"
      style={{
        backgroundImage: "url('/Man.png')",
      }}
    >

      <div className="absolute inset-0 bg-black/55 z-0" />


      <div className="relative z-10 max-w-6xl mx-auto px-4">

        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="flex items-center gap-2 uppercase tracking-wider font-semibold text-base sm:text-lg bg-[rgb(49,49,48)]/60 px-8 py-2 rounded-full">
            <img src="/star.png" className="w-6 h-6 text-yellow-400" alt="" />
            Smart Fitness Starts Here
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Your Global Fitness Companion
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Discover and book top gyms and certified personal trainers worldwide.
        </motion.p>

        <motion.div
          className="mx-auto w-full px-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <form
            onSubmit={handleSubmit}
            role="search"
            className="bg-white rounded-3xl shadow-lg p-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
              <div className="col-span-1 md:col-span-3 min-w-0">
                <label
                  htmlFor="trainers"
                  className="block text-sm font-semibold text-black mb-1"
                >
                  Trainers
                </label>
                <select
                  id="trainers"
                  className="w-full h-12 rounded-md border border-gray-200 px-3 bg-white text-gray-700"
                >
                  <option>All Trainers</option>
                  <option>Certified</option>
                  <option>Gym Partners</option>
                </select>
              </div>

              <div className="col-span-1 md:col-span-3 min-w-0">
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-black mb-1"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Enter city or postcode"
                  className="w-full h-12 rounded-md border border-gray-200 px-3 bg-white text-gray-700"
                />
              </div>

              <div className="col-span-1 md:col-span-2 min-w-0">
                <label
                  htmlFor="training-type"
                  className="block text-sm font-semibold text-black mb-1"
                >
                  Training Type
                </label>
                <select
                  id="training-type"
                  className="w-full h-12 rounded-md border border-gray-200 px-3 bg-white text-gray-700"
                >
                  <option>Yoga</option>
                  <option>Cardio</option>
                  <option>Strength</option>
                </select>
              </div>

              <div className="col-span-1 md:col-span-2 min-w-0">
                <label
                  htmlFor="date"
                  className="block text-sm font-semibold text-black mb-1"
                >
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full h-12 rounded-md border border-gray-200 px-3 bg-white text-gray-700"
                />
              </div>

              <div className="col-span-1 md:col-span-2 min-w-0">
                <label className="block text-xs text-transparent mb-1">
                  Search
                </label>
                <Button
                  className="w-full h-12 !rounded-full px-4 !bg-[#e4cb0a] !text-black hover:scale-105 transition-transform"
                  type="submit"
                >
                  Search
                </Button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

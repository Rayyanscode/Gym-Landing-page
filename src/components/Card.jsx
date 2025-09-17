

export default function TestimonialCard({ profileImg, name, text, rating = 5 }) {
  return (
    <div className="bg-[#161613] rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-200 flex flex-col items-start">
      
      <div className="flex items-center gap-3 mb-4 w-full">
        <img
          src={profileImg}
          alt={name}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
        <span className="text-white font-medium">{name}</span>
      </div>

      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-yellow-400"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.54 8.279L12 18.896l-7.476 4.517 1.54-8.279L0 9.306l8.332-1.151z" />
          </svg>
        ))}
      </div>

      <p className="text-sm text-gray-300">{text}</p>
    </div>
  );
}

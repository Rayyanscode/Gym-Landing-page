

export default function Footer() {
  return (
    <footer className="bg-[#0c0d0c] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-[#0f100f] border border-black rounded-3xl overflow-hidden">
          <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">     
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold">GymBoy</h2>
              </div>
              <div className="mt-16">
                <p className="text-sm text-gray-400">Gymscanner 2025</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-[#e4cb0a] transition">Terms of Use</li>
                <li className="hover:text-[#e4cb0a] transition">Privacy Policy</li>
                <li className="hover:text-[#e4cb0a] transition">Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-[#e4cb0a] transition">Terms of Use</li>
                <li className="hover:text-[#e4cb0a] transition">Privacy Policy</li>
                <li className="hover:text-[#e4cb0a] transition">Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-[#e4cb0a] transition">Terms of Use</li>
                <li className="hover:text-[#e4cb0a] transition">Privacy Policy</li>
                <li className="hover:text-[#e4cb0a] transition">Contact</li>
              </ul>
            </div>
          </div>
    
          <div className="border-t border-black">
            <div className="max-w-7xl mx-auto flex justify-end items-center gap-4 px-6 py-6">
              <a href="#" className="hover:scale-110 transition">
                <img src="/Twitter.png" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:scale-110 transition">
                <img src="/Linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:scale-110 transition">
                <img src="/github.png" alt="GitHub" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:scale-110 transition">
                <img src="/new.png" alt="New" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

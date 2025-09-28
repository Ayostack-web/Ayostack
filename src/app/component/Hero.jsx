import Image from "next/image";
import { 
  FaArrowRight, FaCode, FaReact, FaJs, FaLaptopCode 
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full min-h-[90vh] my-16  flex items-center justify-center bg-gradient-to-br from-gray-400 via-gray-700 to-black text-white relative"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-10 relative z-10">
        
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-200 bg-clip-text text-transparent">
              Ayokunle Shittu
            </span>{" "}
            👋
          </h1>

          {/* Roles with Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <FaCode className="text-blue-400" /> <span>Full-Stack Dev</span>
            </div>
            <div className="flex items-center gap-2">
              <FaReact className="text-cyan-400" /> <span>Next.js Enthusiast</span>
            </div>
            <div className="flex items-center gap-2">
              <FaJs className="text-yellow-400" /> <span>JavaScript Lover</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLaptopCode className="text-pink-400" /> <span>TailwindCSS Magician</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg flex items-center gap-2 transition"
            >
              View My Work <FaArrowRight />
            </a>
            <a
              href="https://www.linkedin.com/in/ayokunle-shittu-560a9a162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              className="px-6 py-3 border border-gray-500 hover:border-blue-400 hover:text-blue-400 rounded-xl transition"
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
            <Image
              src="/toffee-8789.JPG" // change to your own profile image
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

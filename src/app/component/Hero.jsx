export default function HeroSection() {
  return (
    <section
      className='relative h-[60vh] mt-25 flex items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-[url("/toffee-8789.JPG")]'
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 space-y-6 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-100">
          Hi, I’m <span className="text-blue-400">Ayokunle 🧑‍💻</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-blue-100">
         ⚡Full-Stack Developer Passionate About Creating Stunning Web Experience 🚀 | 
         🔮Creative Next.js Developer | 💙 Javascript Lover |🎯 Tailwind Css Magician 
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a
            href="https://www.linkedin.com/in/ayokunle-shittu-560a9a162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg shadow hover:bg-blue-50 hover:text-blue-700 transition"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}

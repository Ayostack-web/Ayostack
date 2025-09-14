// components/GlassHero.jsx

export default function GlassHero() {
  return (
    <section className="relative flex items-center justify-center h-60 bg-blue-100">
      <div className="bg-white/20 backdrop-blur-3xl rounded-3xl p-12 text-center shadow-blue-950 shadow-lg border border-white/30 ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          ✨ Designing the Web, One Pixel at a Time
        </h1>
        <p className="text-gray-700/90 text-lg md:text-xl">
          Crafting clean, modern, and beautiful user experiences with precision and passion.
        </p>
      </div>
    </section>
  );
}

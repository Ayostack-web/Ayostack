"use client";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Working with Ayostack was an incredible experience. His attention to detail is top-tier.",
    name: "Oluwatobiloba A.",
    role: "Frontend Mentor",
  },
  {
    quote: "He’s very consistent, fast-learning, and creative. Highly recommend for web projects.",
    name: "Alayo S.",
    role: "Tech Lead, Abrandrise",
  },
  {
    quote: "Ayostack brings energy and UI precision into every collaboration. Truly impressive.",
    name: "Marvellous A.",
    role: "UI/UX Designer, MG Design",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center text-blue-200 py-5 px-5 bg-[#071026] backdrop-blur-md rounded-2xl">
      <h2 className="text-2xl mb-10 text-color font-bold">💬 Testimonials</h2>
      <div className="max-w-[700px] mx-auto animate-fadeIn">
        <p className="italic text-2xl text-color">
          “{testimonials[current].quote}”
        </p>
        <h4 className="mt-5 font-bold text-color">{testimonials[current].name}</h4>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full cursor-pointer transition ${
                index === current ? "bg-sky-400" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

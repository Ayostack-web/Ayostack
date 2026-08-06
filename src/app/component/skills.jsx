"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  const certifications = [
    {
      title: "Cloud Infrastructure & Virtualization",
      items: [
        { name: "Ubuntu Linux Professional", issuer: "Canonical", image: "/Canonical.png" },
        { name: "Docker Foundations", issuer: "Docker, Inc.", image: "/docker_mark-logo_brandlogos.net_yetav.png" },
      ],
    },
    {
      title: "Data Engineering & Algorithmic Intelligence",
      items: [
        { name: "Data Engineering Foundations", issuer: "Astronomer", image: "/Astronomer.jpg" },
        { name: "Machine Learning with Python", issuer: "Anaconda", image: "/anaconda.png" },
      ],
    },
    {
      title: "Communication & API Architecture",
      items: [
        { name: "Microsoft Azure AI Essentials Professional Certificate", issuer: "Microsoft", image: "/images.png" },
        { name: "Microservices Foundations Professional Certificate", issuer: "Kong", image: "/Kongtype_Logo.jpg" },
      ],
    },
  ];

  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      className="py-14 px-6 bg-[#071026]"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-2 text-center premium-gradient-title"
        >
          Professional Certifications
        </motion.h2>
        <p className="text-center text-blue-200/70 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Certifications that reflect my focus across infrastructure, distributed systems, data, and applied AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((certification, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="premium-card-soft rounded-2xl p-6 border border-blue-200/10 shadow-[0_24px_70px_rgba(2,8,24,0.6),0_0_26px_rgba(96,165,250,0.15),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold text-blue-100 mb-4">
                {certification.title}
              </h3>
              <ul className="space-y-3 text-blue-200/80 text-sm md:text-base">
                {certification.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3">
                    <Image
                      src={item.image}
                      alt={`${item.issuer} logo`}
                      width={28}
                      height={28}
                      className="w-7 h-7 rounded-md object-contain"
                    />
                    <span>
                      {item.name} <span className="text-blue-300/60">({item.issuer})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

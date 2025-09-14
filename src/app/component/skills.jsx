"use client";

import { 
  SiPython, SiHtml5, SiCss3, SiJavascript, SiReact, 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb 
} from 'react-icons/si';
import { 
  FaGitAlt, FaNodeJs, FaBolt, FaBroadcastTower, FaDatabase, FaVideo 
} from 'react-icons/fa';

export default function Skills() {
  const skills = [
    { name: "Python", icon: <SiPython className="w-6 h-6"/> },
    { name: "HTML5", icon: <SiHtml5 className="w-6 h-6"/> },
    { name: "CSS3", icon: <SiCss3 className="w-6 h-6"/> },
    { name: "JavaScript", icon: <SiJavascript className="w-6 h-6"/> },
    { name: "React.js", icon: <SiReact className="w-6 h-6"/> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6"/> },
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6"/> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-teal-500"/> },
    { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-green-600"/> },
    { name: "Express", icon: <FaBolt className="w-6 h-6 text-gray-700"/> },
    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-500"/> },
    { name: "Mongoose", icon: <FaDatabase className="w-6 h-6 text-red-600"/> }, // ⬅ Added
    { name: "Socket.io", icon: <FaBroadcastTower className="w-6 h-6 text-purple-500"/> },
    { name: "WebRTC", icon: <FaVideo className="w-6 h-6 text-blue-500"/> }, // ⬅ Added
    { name: "ZeroMQ", icon: <FaBolt className="w-6 h-6 text-yellow-600"/> },
    { name: "Git & GitHub", icon: <FaGitAlt className="w-6 h-6 text-orange-600"/> },
  ];

  return (
    <section id="skills" className="py-12 px-6 bg-blue-100">
      <h2 className="text-3xl font-bold mb-6">🛠 Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-4 shadow-blue-950 bg-blue-200 dark:bg-gray-800 rounded-lg font-bold shadow-md transform transition duration-300 hover:-translate-y-1 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

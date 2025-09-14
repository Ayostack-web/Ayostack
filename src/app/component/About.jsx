// components/AboutMe.jsx

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-15 p-2 bg-blue-100 dark:bg-gray-900 flex flex-col justify-center items-center"
    >
      <div className="max-w-3xl w-full">
        <p className="text-lg mb-2 text-center font-bold ">
          💻 I'm Ayokunle Shittu | Full-Stack Developer | 🚀 Tech Enthusiast | 🎨 UI Lover
        </p>
        <p className="text-gray-950 dark:text-gray-900 mb-2 text-center">
          I turn ideas into sleek, modern web apps. I build with <strong>React, Next.js, Tailwind CSS, Node.js, Express,Nest.js, Postgresql, and Socket.io</strong>, creating smooth, user-friendly experiences.
        </p>
        <p className="text-gray-950 dark:text-gray-900 text-center">
          🌟 Always learning, experimenting, and bringing creative solutions to life. <br />
          📬 Let’s connect and build something amazing together!
        </p>
      </div>
    </section>
  );
}

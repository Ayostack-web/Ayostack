// app/components/Projects.jsx

export default function Projects() {
  const projects = [
    {
      title: "🌐 Portfolio Website",
      description: "A responsive, personal portfolio to showcase my skills, projects, and contact info — built with clean design and smooth interactions.",
      link: "https://your-portfolio-url.com",
    },
    {
      title: "🍕 Pizza Ordering Website",
      description: "A sleek, responsive pizza ordering platform with interactive UI, real-time selections, and a tasty user experience.",
      link: "https://pizza-heaven-ge4m.vercel.app/#menu",
    },
    {
      title: "⛪Fellowship Website",
      description: "A responsive website for my campus fellowship to share events, announcements, and connect members.",
      link: "https://cssf-funaab.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="floating-card section tilt-card section">
      <h1 className="text-3xl font-bold my-6 text-center"  >Featured Projects</h1>
      <br />
      <div className="projects hero-text">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <p className="font-extrabold" >{project.title}</p>
            <p >{project.description}</p>
            <br />
            <a
              href={project.link}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Visit Project
            </a>
          </div>
        ))}
      </div> 
    </section> 
  );
}

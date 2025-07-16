const projects = [
  {
    title: "Portfolio",
    desc: "React + Tailwind CSS",
    github: "https://portfolio-git-main-kishansobhashnas-projects.vercel.app/",
    live: "https://portfolio-gamma-eight-97.vercel.app",
  },
  {
    title: "Car Washing Management  System",
    desc: "PHP + Laravel + MySQL",
    github: "https://github.com/Kishansobhashna/Car-Washing-Management-System",
    live: "https://car-washing-management-system-henna.vercel.app/",
  },
  {
    title: "E-commerce App",
    desc: "React + Node.js + MySQL e-commerce site",
    // github: "https://github.com/yourname/ecommerce",
    live: "https://ecommerce-demo.vercel.app",
  },
  {
    title: "online-stylish-store",
    desc: "React + Node.js + Express ",
    github: "https://github.com/Kishansobhashna/online-stylish-store",
    live: "https://online-stylish-store.vercel.app/",
  },
  {
    title: "Task Manager",
    desc: "React + Express based Task Manager",
    // github: "https://github.com/yourname/task-manager",  
    live: "https://task-demo.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid gap-6">
        {projects.map((p) => (
          <div key={p.title} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p>{p.desc}</p>
            <div className="mt-2 space-x-4">
              <a href={p.github} target="_blank" className="text-blue-600">GitHub</a>
              <a href={p.live} target="_blank" className="text-green-600">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

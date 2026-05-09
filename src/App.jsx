function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Aanchal Sharma 🚀
        </h1>

        <h2 className="text-2xl md:text-3xl text-cyan-400 mb-6">
          DevOps & Cloud Engineer
        </h2>

        <p className="max-w-3xl text-gray-300 text-lg leading-8 mb-10">
          Passionate about Docker, Kubernetes, AWS, Terraform,
          CI/CD pipelines and modern cloud infrastructure.
        </p>

        <div className="flex gap-5 flex-wrap justify-center">
          <a
          href="https://github.com/aanchal0097"
          target="_blank"
         rel="noopener noreferrer"
          >
        <button className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition">
          GitHub
  </button>
</a>
<a
  href="https://www.linkedin.com/in/aanchal-sharma-b1b655282/"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition">
    LinkedIn
  </button>
</a>
</div>
</section>

      {/* SKILLS */}
      <section className="px-8 py-20">

        <h2 className="text-5xl font-bold text-center mb-16">
          Skills ⚡
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {[
            "Linux",
            "Docker",
            "Kubernetes",
            "Terraform",
            "AWS",
            "GitHub Actions",
            "ArgoCD",
            "React",
            "Python",
            "C++",
            "Git & GitHub"
          ].map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-700 p-8 rounded-2xl text-center hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}

        </div>
         </section>


      {/* PROJECTS */}
<section className="px-8 py-20 bg-slate-900">

  <h2 className="text-5xl font-bold text-center mb-16">
    Projects 🔥
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

    {[
      {
        title: "Emergency Healthcare",
        desc: "Healthcare project built using HTML.",
        link: "https://github.com/aanchal0097/emergency-healthcare"
      },
      {
        title: "AWS S3 Icecream Website",
        desc: "Responsive Ice Cream website hosted on AWS S3.",
        link: "https://github.com/aanchal0097/aws-s3-icecream-website"
      },
      {
        title: "AWS Cost Monitoring Alert",
        desc: "AWS billing alert system using Python.",
        link: "https://github.com/aanchal0097/aws-cost-monitoring-alert"
      },
      {
        title: "Todo App",
        desc: "Simple Todo application using Python.",
        link: "https://github.com/aanchal0097/todo-app"
      },
      {
        title: "Static Site Auto Deploy",
        desc: "Automated static website deployment project.",
        link: "https://github.com/aanchal0097/static-site-auto-deploy"
      },
      {
        title: "DevOps Portfolio",
        desc: "Dockerized React portfolio with GitHub Actions CI/CD.",
        link: "https://github.com/aanchal0097/Portfolio"
      }
    ].map((project) => (
      <div
        key={project.title}
        className="bg-slate-950 border border-slate-700 p-8 rounded-2xl hover:border-cyan-400 transition"
      >
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">
          {project.title}
        </h3>

        <p className="text-gray-300 mb-6">
          {project.desc}
        </p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition">
            View Project
          </button>
        </a>
      </div>
    ))}

  </div>
</section>

      {/* ABOUT */}
      <section className="px-8 py-24 text-center">

        <h2 className="text-5xl font-bold mb-10">
          About Me 👩‍💻
        </h2>

        <p className="max-w-4xl mx-auto text-gray-300 text-lg leading-9">
          I am currently pursuing MCA from JECRC University and
          passionate about DevOps, Cloud Computing, Infrastructure
          Automation and Software Development. I enjoy building
          scalable systems and learning modern technologies.
        </p>
      </section>


      {/* CONTACT */}
      <section className="px-8 py-20 bg-slate-900 text-center">

        <h2 className="text-5xl font-bold mb-10">
          Contact 📩
        </h2>

        <div className="space-y-4 text-lg text-gray-300">

  <p>
    Email:
    <a
      href="mailto:aanchal1047@gmail.com"
      className="text-cyan-400 ml-2 hover:underline"
    >
      aanchal1047@gmail.com
    </a>
  </p>

  <p>
    GitHub:
    <a
      href="https://github.com/aanchal0097"
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-400 ml-2 hover:underline"
    >
      github.com/aanchal0097
    </a>
  </p>

  <p>
    LinkedIn:
    <a
      href="https://www.linkedin.com/in/aanchal-sharma-b1b655282/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-400 ml-2 hover:underline"
    >
      https://www.linkedin.com/in/aanchal-sharma-b1b655282/
    </a>
  </p>

</div>

        <button className="mt-8 bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Download Resume
        </button>
      </section>


      {/* FOOTER */}
      <footer className="text-center py-6 bg-black text-gray-400">
        Made with ❤️ by Aanchal Sharma
      </footer>

    </div>
  
  )
}

export default App
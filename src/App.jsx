import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <main>
      <nav className="navbar">
        <h2>Garrett Morris</h2>

        <div>
          <Link to="/">{">"}home</Link>
          <Link to="/about">{">"}about</Link>
          <Link to="/projects">{">"}projects</Link>
          <Link to="/contact">{">"}contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

function Home() {
  return (
    <section className="page">
      <p>Howdy, I'm</p>
      <h1>Garrett Morris</h1>
      <h2>Honors Computer Science Student at Texas A&M</h2>

      <p>
        I'm a junior at TAMU interested in machine learning, applied AI, and
        building useful software around data-driven systems.
      </p>
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <h1>About</h1>

      <p>
        I’m working toward a career in machine learning engineering. I’m focused
        on building practical ML projects using Python, TensorFlow, Keras, and
        data science tools.
      </p>

      <p>
        I’m also improving my software engineering skills through personal
        projects, web apps, and backend tools.
      </p>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "My Portfolio",
      description:
        "You're here right now. Just a simple website that I made with React.",
      link: "https://kerrett.com",
    },
    {
      title: "S.H.A.D.E Project",
      description:
        "TensorFlow/Keras LSTM pipelines for next-day heat-index forecasting and heat-risk classification for Austin, TX.",
      link: null,
    },
    {
      title: "Valorant Performance Tracker",
      description:
        "Simple Python performance analytics tool for VALORANT that queries match-history data to analyze player statistics.",
      link: null,
    },
  ];

  return (
    <section className="page">
      <h1>Projects</h1>

      {projects.map((project) => (
        <div className="project" key={project.title}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer">
              View project
            </a>
          ) : (
            <span>Link coming soon</span>
          )}
        </div>
      ))}
    </section>
  );
}

function Contact() {
  return (
    <section className="page">
      <h1>Contact</h1>

      <p>You can reach me through email or GitHub.</p>

      <p>
        <a href="mailto:contact@kerrett.com">Email me</a>
      </p>

      <p>
        <a href="https://github.com/kerrettt" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
    </section>
  );
}

export default App;
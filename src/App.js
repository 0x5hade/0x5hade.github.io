import React from 'react';

// Simple Inline SVG Icons to keep it minimal
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

function App() {
  const projects = [
    {
      id: 1,
      name: "Freelancer Recruitment Platform",
      description: "Contributed to an internal platform for recruiter management. Implemented REST API endpoints, JWT-based authentication, and role-based access control.",
      tech: "TypeScript, React, Express.js, shadcn/ui",
      link: "https://github.com/0x5hade"
    },
    {
      id: 2,
      name: "Codeforces Once-A-Day Bot",
      description: "Developed a scheduled Discord bot that fetches and sends a random Codeforces problem each day using the official Codeforces API.",
      tech: "JavaScript, Node.js",
      link: "https://github.com/0x5hade"
    },
    {
      id: 3,
      name: "React E-Commerce Front",
      description: "A modern e-commerce storefront showcasing client-side routing, modular components, and a robust TypeScript setup.",
      tech: "TypeScript, React, Vite, React Router",
      link: "https://github.com/0x5hade"
    }
  ];

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm Ahmed Walid Ibrahim.</h1>
        <p>
          I'm a Computer Science student and full-stack developer with hands-on experience in backend systems, web development, and Linux-based deployment. 
        </p>
        <a href="mailto:ahmedwalid2@protonmail.com" className="hero-contact">
          Get in touch
        </a>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Selected Work</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-header">
                <h3>{project.name}</h3>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Source <ArrowIcon />
                </a>
              </div>
              <p className="project-desc">{project.description}</p>
              <p className="project-tech">{project.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Background</h2>
        <p className="skills-list">
          Currently studying Computer Science at Ain Shams University. Through professional internships and personal projects, I have developed production web features, integrated external APIs, and deployed applications on Linux servers using Docker.
          <br /><br />
          <strong>Core Technologies:</strong> <span>JavaScript/TypeScript, React, Node.js, Express.js, Python, Java, C++, Docker, Linux, Git.</span>
        </p>
      </section>

      {/* Footer Section */}
      <section className="footer">
        <div>
          <h2>Let's work together.</h2>
          <a href="mailto:ahmedwalid2@protonmail.com" className="project-link">
            ahmedwalid2@protonmail.com
          </a>
        </div>
        <div className="social-links">
          <a href="https://github.com/0x5hade" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/ahmed-w-ibrahim-393382339/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;

import React from "react";
import "../App.css";
const projects = [
  {
    title: "eVoting System Using Mern Stack",
    description: "A secure and transparent eVoting system built with the MERN stack.",
    imageUrl: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/8f13711aece3.jpg",
    repoLink: "https://github.com/vankudregoutam/eVoting-using-MERN-Stack",
    liveLink: "https://e-voting-using-mern-stack.vercel.app/"
  },
  {
    title: "Employee Dept Management",
    description: "A full-stack Spring Boot + React project to manage employees and departments.",
    imageUrl: "https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2023/11/Employee-Management-System.png",
    repoLink: "https://github.com/vankudregoutam/EmployeeDeptManagement"
  },
  {
    title: "Blockchain E-Voting",
    description: "Secure online voting system built with Blockchain technology.",
    imageUrl: "https://repository-images.githubusercontent.com/473491878/30abd8ff-67ce-4881-b2ec-151de669df85",
    repoLink: "https://github.com/vankudregoutam/BlockchainBasedE-Voting"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id='projects-section'>
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <img src={proj.imageUrl} alt={proj.title} className="project-image" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="project-links">
              {proj.repoLink && (
                <a href={proj.repoLink} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              )}
              {proj.liveLink && (
                <a href={proj.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

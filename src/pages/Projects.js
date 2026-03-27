import React, { useState } from 'react';
import projects from './projects.json';
//for projects page i have opted in for using a json file for easy project adding in the future, it only needs a title, description and the link or the content you want to include. this makes the page very modular and actually useful in the future
//im using .map to traverse the contentst of the json file which i pass in the selectedProject, upon selection of the button with assigned index number, it will display the contents with that said index number
function Projects () {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProject = projects[selectedIndex];
  const[page, getPage] = useState("home");

  let portfolioHome = (
  <div className="grid">
      <h2 className="projects-title">Projects</h2>

      <div className="project-grid-item" >
        {projects.map((project, index) => (
          <button
            key={index}
            className={`project-button`}
            onClick={() => {
              setSelectedIndex(index);
              getPage("project");
            }}
          >
            <div><img className="thumbnail" src={project.image || 'https://anotheroldguy.wordpress.com/wp-content/uploads/2019/03/placehold.jpg'} alt='project'/>{project.title}</div>
          </button>
        ))}
      </div>

    </div>
  );

  let portfolioPage = (
      <div className="project-display">
        <button onClick={() => getPage("home")}>Go Back</button>
        <h3>{selectedProject.title}</h3>
        <img class="project-image" src={selectedProject.image || 'https://anotheroldguy.wordpress.com/wp-content/uploads/2019/03/placehold.jpg'} alt='project'/>
        <p>{selectedProject.description}</p>
        {selectedProject.link && (
          <a href={selectedProject.link} target="_blank" rel="noreferrer">
            See More
          </a>
        )}
      </div>

  );


  return (
    <div>
      {page === "home" && portfolioHome}
      {page === "project" && portfolioPage}
    </div>
  );
}

export default Projects;
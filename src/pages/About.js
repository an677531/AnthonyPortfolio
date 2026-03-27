import React from 'react';
//about me page also uses the most basic transitions identical to others and uses basic tags seen in html to create a text based page about me.
function About() {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        I’m a Digital Media student at the University of Central Florida, specializing in web and interactive media. I focus on front-end development and UI/UX design, with an emphasis on building clean, responsive, and accessible digital experiences.
      </p>
      <p>
       I currently work as an OPS Web Designer at UCF, where I build and maintain production WordPress sites, improve usability, and ensure accessibility standards are met. Alongside that, I work as a Marketing Graphic Design Assistant, creating visual content for campus campaigns and events that reach thousands of students. These roles have given me experience working on real-world projects with both technical and visual impact.
      </p>
      <p>My core skills include HTML, CSS, JavaScript, React, and WordPress, along with experience in responsive design and basic SEO. I approach development with a focus on clarity, usability, and consistency, aiming to create interfaces that are both functional and easy to navigate.</p>
      <p>Outside of my work I explore various activities and hobbies to ensure I keep learning and experiencing new things. I create traditional and digital art. I enjoy worldbuilding through art and writing, or exploring existing exciting fantasy worlds through books, movies, or video games. I also enjoy taking care of my plants, and exploring the world through cooking new dishes.
      </p>
      <p>I’m particularly interested in frontend and product-oriented roles where I can contribute to building user-focused applications while continuing to grow my technical and design skills.</p>

      <ul className="about-list">
        <li>
          <strong>Frontend Development</strong> HTML5, CSS3, JavaScript (ES6+), React, Responsive Design
        </li>
        <li>
          <strong>Tools & Platforms:</strong> WordPress, Git & GitHub, Figma, Adobe Creative Suite
        </li>
        <li>
          <strong>Other Technologies</strong> Python, MySQL, PHP, Basic SEO
        </li>
        <li>
          <strong>Visual Design Skills:</strong> Autodesk Maya, AutoCAD, Revit, Inventor, Fusion 360
        </li>
      </ul>
    </div>
  );
}

export default About;

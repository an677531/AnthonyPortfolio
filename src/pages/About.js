import React from 'react';
//about me page also uses the most basic transitions identical to others and uses basic tags seen in html to create a text based page about me.
function About() {
  return (
    <div className="about-wrapper">
      <h2>About Me</h2>
      <img className="bio-image" src="https://scontent-mia3-3.cdninstagram.com/v/t51.82787-19/583350219_18048223187665291_1866053517353208180_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=108&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=w3uRQlWXpf0Q7kNvwHLRMs_&_nc_oc=Ado9ucva7AZJup3ILNq4tyL6HfJB9PTZbLejQvj9kTe8qntQK6awZ4npYC8rPcq5S88Mog9_V7r1wiMDzJZu3kU7&_nc_zt=24&_nc_ht=scontent-mia3-3.cdninstagram.com&_nc_gid=TGAQAPUf11ioC7py3cd_xw&_nc_ss=7a32e&oh=00_Afzgt1Aye9O360RF8SUUpL0haDFtyCuEC_g3TNR2bjPXjA&oe=69CBC440" alt="Anthony"/>
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

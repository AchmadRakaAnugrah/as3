// About.js
import React, { Component } from 'react';
import AboutImage from '../About.png'; // Replace with your actual image path

class About extends Component {
  render() {
    return (
      <div>
        <h2>About Me</h2>
        <img src={AboutImage} alt="Profile" style={imageStyle} />
        <p>
        Hi, I'm Achmad Raka Anugrah! I am a student who is taking part in Independent Campus activities.
        </p>

        <h3>Education</h3>
        <p>
        I am an active student at the State University of Semarang majoring in Computer Science, Information Systems Department.
        </p>

        <h3>Experience</h3>
        <p>
        I have experience from Svelte, React Boostrap. My role.
        </p>

        <h3>Skills</h3>
        <p>
        Some of my key skills include HTML, CSS, Java, React, Svelte, Boostrap and UI UX.
        </p>

        <h3>Interests</h3>
        <p>
        Apart from my professional life, I am also interested in programming, traveling and cooking. In my free time, I enjoy traveling and cooking..
        </p>

        <h3>Awards and Achievements</h3>
        <p>
        My achievements are winning Badminton, Futsal and Football.
        </p>
        <p>Feel free to connect with me through <a href="https://github.com/AchmadRakaAnugrah" target="_blank" rel="noopener noreferrer">https://github.com/AchmadRakaAnugrah</a>.</p>
      </div>
    );
  }
}

// Style for the image
const imageStyle = {
  width: '200px', // Set the width as needed
  height: 'auto',
  borderRadius: '50%', // To make it a circle, adjust as needed
};

export default About;

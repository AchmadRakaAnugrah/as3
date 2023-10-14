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
          Hi, I'm [Your Name]! I am a passionate [Your Profession] based in [Your Location]. I have a strong background
          in [Your Field or Industry].
        </p>

        <h3>Education</h3>
        <p>
          I graduated from [Your University] with a degree in [Your Degree] and specialized in [Your Major].
        </p>

        <h3>Experience</h3>
        <p>
          Over the years, I have gained valuable experience working with [Your Previous Companies or Projects]. My roles
          have included [Brief Description of Roles and Responsibilities].
        </p>

        <h3>Skills</h3>
        <p>
          Some of my key skills include [Your Skills]. I am proficient in [Programming Languages, Tools, etc.] and have a
          strong ability to [Your Key Abilities].
        </p>

        <h3>Interests</h3>
        <p>
          Apart from my professional life, I am also passionate about [Your Interests and Hobbies]. In my free time, I
          enjoy [Your Hobbies].
        </p>

        <h3>Awards and Achievements</h3>
        <p>
          I am proud to have received recognition for [Your Achievements]. Some of the awards and honors I have received
          include [Awards Received].
        </p>

        <p>Feel free to connect with me through [Your Social Media or Contact Information].</p>
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

import React, { Component } from 'react';
import HTMLImage from '../HTML.png'; // Import HTML image
import CSSImage from '../CSS.png'; // Import CSS image
import JavaImage from '../Java.png'; // Import Java image
import ReactImage from '../React.png'; // Import React image
import SvelteImage from '../Svelte.png'; // Import Svelte image
import BoostrapImage from '../Boostrap.png'; // Import Bootstrap image
import UIUXImage from '../UIUX.png'; // Import UI/UX image

class Skills extends Component {
  render() {
    const skillsData = [
      { name: 'HTML', image: HTMLImage, description: 'Proficient in creating structured and semantic markup.' },
      { name: 'CSS', image: CSSImage, description: 'Skilled in styling web pages using CSS, including CSS preprocessors.' },
      { name: 'Java', image: JavaImage, description: 'Experience in Java programming language for backend development.' },
      { name: 'React', image: ReactImage, description: 'Advanced knowledge of building web applications using React.' },
      { name: 'Svelte', image: SvelteImage, description: 'Familiarity with the Svelte framework for building efficient web applications.' },
      { name: 'Boostrap', image: BoostrapImage, description: 'Proficient in using Bootstrap for responsive and mobile-first web development.' },
      { name: 'UI/UX', image: UIUXImage, description: 'Strong understanding of user interface and user experience design principles.' },
      // Add more skills as needed
    ];

    return (
      <div>
        <h2>Skills</h2>

        <div style={skillsContainer}>
          {skillsData.map((skill, index) => (
            <div key={index} style={skillItem}>
              <img src={skill.image} alt={skill.name} style={imageStyle} />
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// Styles
const skillsContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const skillItem = {
  textAlign: 'center',
  margin: '20px',
  maxWidth: '300px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
};

export default Skills;

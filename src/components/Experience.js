import React, { Component } from 'react';
import SvelteImage from '../Svelte.png';
import ReactImage from '../React.png';
import BoostrapImage from '../Boostrap.png';

class Experience extends Component {
  render() {
    const interests = [
    { name: 'Svelte', image: SvelteImage, description: ' I m learning Svelte and have created a few small projects. Even though I m still a beginner, I m impressed with the development speed that Svelte provides.' },
    { name: 'React', image: ReactImage, description: 'Currently, I am learning React and have succeeded in creating simple components. Even though I am still a beginner, I am enthusiastic about continuing to explore React.' },
    { name: 'Boostrap', image: BoostrapImage, description: 'I m just learning Bootstrap and have been using its components to create responsive layouts. Although still a beginner, I enjoy Bootstrapcs simplicity in user interface development.' },
    // Add more interests as needed
  ];

  return (
    <div>
      <h2>Experience</h2>

      <div style={interestContainer}>
        {interests.map((interest, index) => (
          <div key={index} style={interestItem}>
            <img src={interest.image} alt={interest.name} style={imageStyle} />
            <h3>{interest.name}</h3>
            <p style={textJustify}>{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
  }
}

// Styles
const interestContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const interestItem = {
  textAlign: 'center',
  margin: '20px',
  maxWidth: '300px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
};

const textJustify = {
  textAlign: 'justify',
};

export default Experience;

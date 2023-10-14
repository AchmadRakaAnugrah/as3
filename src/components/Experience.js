import React, { Component } from 'react';
import SvelteImage from '../Svelte.png';
import ReactImage from '../React.png';
import BoostrapImage from '../Boostrap.png';

class Experience extends Component {
  render() {
    const interests = [
      { name: 'Coding', image: SvelteImage, description: 'Passionate about writing clean and efficient code.' },
      { name: 'Travel', image: ReactImage, description: 'Love exploring new places and experiencing different cultures.' },
      { name: 'Cooking', image: BoostrapImage, description: 'Enjoy experimenting with ingredients and creating delicious meals.' },
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
              <p>{interest.description}</p>
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

export default Experience;

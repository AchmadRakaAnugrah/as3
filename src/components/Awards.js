import React, { Component } from 'react';
import BadmintonImage from '../Badminton.png';
import FutsalImage from '../Futsal.png';
import FootballImage from '../Football.png';

class Awards extends Component {
  render() {
    const awardsData = [
    { name: 'Badminton Championship', image: BadmintonImage, description: 'Winner of the Badminton Championship.' },
    { name: 'Futsal Tournament', image: FutsalImage, description: 'Outstanding performance in the Futsal Tournament.' },
    { name: 'Football Trophy', image: FootballImage, description: 'Recipient of the Football Trophy.' },
    // Add more awards as needed
    ];

    return (
      <div>
        <h2>Awards</h2>

        <div style={awardsContainer}>
          {awardsData.map((award, index) => (
            <div key={index} style={awardItem}>
              <img src={award.image} alt={award.name} style={imageStyle} />
              <h3>{award.name}</h3>
              <p>{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// Styles
const awardsContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const awardItem = {
  textAlign: 'center',
  margin: '20px',
  maxWidth: '300px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
};

export default Awards;

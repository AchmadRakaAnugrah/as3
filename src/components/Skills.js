import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

class Skills extends Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        <ul>
          <li><FontAwesomeIcon icon={faHtml5} /> HTML5</li>
          <li><FontAwesomeIcon icon={faCss3} /> CSS3</li>
          <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
          <li><FontAwesomeIcon icon={faReact} /> React</li>
        </ul>
      </div>
    );
  }
}

export default Skills;

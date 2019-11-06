import * as React from 'react';

// will display project feed upon navigation from newsfeed.
const ProjectDisplay = (props) => {
  return (
  <div>
      
    <div className="header">
      Project Display
    </div>
    <div>
      <h2>{props.item.title}</h2>
      <p>
        {props.item.description}
      </p>
      {props.item.javascript &&
        <p>Javascript</p>
      }
      {props.item.react &&
        <p>React</p>
      }
      {props.item.vue &&
        <p>Vue</p>
      }
      {props.item.node &&
        <p>Node.js</p>
      }
      {props.item.sql &&
        <p>SQL</p>
      }
      {props.item.python &&
        <p>Python</p>
      }
    </div>
  </div>
  );
};

export default ProjectDisplay;

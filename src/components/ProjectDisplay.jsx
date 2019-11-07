import React, {Component} from 'react';

// will display project feed upon navigation from newsfeed.
const ProjectDisplay = (props) => {


  return (
    <div className="project-container">
      <div className="project">
      <h3 className="project-title">{props.item.title}</h3>
      <p className="project-description">
        {props.item.description}
      </p>
      <div className="techstack"> 
        {props.item.javascript &&
        <div className="tech">
          <p>Javascript</p>
        </div> 
        }
        {props.item.react &&
        <div className="tech">  
          <p>React</p>
        </div>
        }
        {props.item.node &&
        <div className="tech">  
          <p>Node.js</p>
        </div>
        }
        {props.item.sql &&
        <div className="tech">  
          <p>SQL</p>
        </div>
        }
        {props.item.vue &&
        <div className="tech">  
          <p>Vue</p>
        </div>
        }
        {props.item.python &&
        <div className="tech">  
          <p>Python</p>
        </div>
        }
      </div>
      </div>
      <div>
        <span
          className="heart-icon"
          style={{
          display: 'inline-block',
          width: 10,
          cursor: 'pointer',
          color: props.liked ? 'red' : 'lightgrey',
          }}
          // onClick={(e) => props.liked ? this.removeFavorites(e, track.id) : this.addFavorites(e, track.id) }
          >
          <i className="fas fa-heart"></i>
        </span>
      </div>
    </div>
    );
}


export default ProjectDisplay;

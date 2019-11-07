import React, {Component} from 'react';

// will display project feed upon navigation from newsfeed.
const ProjectDisplay = (props) => {

  const handleCheck = (project) => {
    return props.favorites.some(item => project._id === item.projectId);
  }

  const currFav = handleCheck(props.item);

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
        <div className="author">
          <a href={props.item.gitProfile}>Submitted by <span className="username">@{props.item.username}</span></a>
        </div>
      </div>

      <div>

      </div>

      </div>
      <div>
        <span
          className="heart-icon"
          style={{
          display: 'inline-block',
          width: 10,
          cursor: 'pointer',
          color: currFav ? 'red' : 'lightgrey',
          }}
          onClick={(e) => currFav ? props.removeFavorites(e, props.item._id) : props.addFavorites(e, props.item._id) }
          >
          <i className="fas fa-heart"></i>
        </span>
      </div>
    </div>
    );
}


export default ProjectDisplay;

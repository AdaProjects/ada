import React, {Component} from 'react';

// will display project feed upon navigation from newsfeed.
class ProjectDisplay extends Component {
  constructor(props) {
    super(props);

  }


  render() {

    return (
      <div>
      
    <div className="header">
      Project Display
    </div>
    <div>
      <h2>{this.props.item.title}</h2>
      <p>
        {this.props.item.description}
      </p>
      {this.props.item.javascript &&
        <p>Javascript</p>
      }
      {this.props.item.react &&
        <p>React</p>
      }
      {this.props.item.vue &&
        <p>Vue</p>
      }
      {this.props.item.node &&
        <p>Node.js</p>
      }
      {this.props.item.sql &&
        <p>SQL</p>
      }
      {this.props.item.python &&
        <p>Python</p>
      }
    </div>
  </div>
    );
  }
}


export default ProjectDisplay;

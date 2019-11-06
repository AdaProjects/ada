import * as React from 'react';

// will display project feed upon navigation from newsfeed.
const ProjectDisplay = () => {
  return (
    <div className="header">
      Project Display
      <form action="submit">
        Post a Project
        <input type="text" placeholder="Project Title" />
        <input type="text" placeholder="Project Description" />
        <br/>
        Tech Stack
        <br/>
        <input type="checkbox" name="Javascript" value="Javascript" /> Javascript
        <input type="checkbox" name="React" value="React" /> React
        <input type="checkbox" name="Node" value="Node" /> Node <br/>
        <input type="checkbox" name="SQL" value="SQL" /> SQL
        <input type="checkbox" name="Vue" value="Vue" /> Vue
        <input type="checkbox" name="Python" value="Python" /> Python
      </form>
    </div>
  );
};

export default ProjectDisplay;

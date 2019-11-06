import React from 'react';
import NewsContainer from './NewsContainer.jsx';
import ProjectContainer from './ProjectContainer.jsx';

// will display project feed upon navigation from newsfeed.
const MainContainer = () => {
  return (
    <div className="main">
      <NewsContainer />
      <ProjectContainer />
    </div>
  );
};

export default MainContainer;

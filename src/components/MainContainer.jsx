import React from 'react';
import NewsContainer from './NewsContainer.jsx';
import ProjectContainer from './ProjectContainer.jsx';
import Tabs from './Tabs.jsx';

// will display project feed upon navigation from newsfeed.
const MainContainer = () => {
  return (
    <div className="main">
      <h2 className="page-title">ADA</h2>
      <Tabs>
        <div label="Projects">
          <ProjectContainer />
        </div>
        <div label="News">
          <NewsContainer />
        </div>
      </Tabs>
    </div>
  );
};

export default MainContainer;

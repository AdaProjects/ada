import React from 'react';
import NewsContainer from './NewsContainer.jsx';
import ProjectContainer from './ProjectContainer.jsx';
import Tabs from './Tabs.jsx';

// will display project feed upon navigation from newsfeed.
const MainContainer = () => {
  return (
    <div className="main">
      <Tabs>
        <div label="News">
          <NewsContainer />
        </div>
        <div label="Projects">
          <ProjectContainer />
        </div>
      </Tabs>
    </div>
  );
};

export default MainContainer;

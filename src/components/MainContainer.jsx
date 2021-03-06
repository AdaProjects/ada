import React, { useState, useEffect } from 'react';
import NewsContainer from './NewsContainer.jsx';
import ProjectContainer from './ProjectContainer.jsx';
import ProfileDisplay from './ProfileDisplay.jsx';
import Tabs from './Tabs.jsx';
import axios from 'axios';


// will display project feed upon navigation from newsfeed.
const MainContainer = (...props) => {
  const [userData, setUserData] = useState(null);
  const [id, setId] = useState(null);

  useEffect (() => {
    fetch(`/getUserData/?username=${props[0].username}`, {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({username: props[0].username})
    })
    .then(res => res.json())
    .then(res => {
      res.userData.username = props[0].username;

      setUserData(res.userData);
      setId(res.userData._id);
    });
  }, [])

  return (
    <div className="main">
      <h2 className="page-title">ADA</h2>
      <Tabs>
        <div label="News">
          <NewsContainer />
        </div>
        <div label="Projects">
          <ProjectContainer userId={id} />
        </div>
        <div id="profile-tab" label="Profile">
          <ProfileDisplay userData={userData} />
        </div>
      </Tabs>
      <div>
        {/* <Modal /> */}
      </div>
    </div>
  );
};

export default MainContainer;

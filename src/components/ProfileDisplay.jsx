import React, { useState, useEffect } from 'react';
import ProjectDisplay from './ProjectDisplay.jsx';

// will display a users profile, created posts and favorites upon navigation from main page.
const ProfileDisplay = (props) => {
  const [projectComponents, setProjectComponents] = useState(null);

  useEffect(() => {
    fetch(`/getFavs`, {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({userId: props.userData._id})
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setProjectComponents(res.map((cur, idx) => {
          return (
          <ProjectDisplay
            key={idx}
            item={cur}
            favorites={res}
          />
          )
        })
      )
    });
  }, [])

  return (
    <div className="header">
      <img className="main-profile-pic" src={props.userData.imageUrl}></img>
      <ul className="user-info">
        <li>Username: {props.userData.username}</li>
        <li>Email: {props.userData.email}</li>
        <li>Github Profile: {props.userData.gitProfile}</li>
      </ul>

      <h3>Favorites</h3>
      {projectComponents}
    </div>
  );
};

export default ProfileDisplay;

import * as React from 'react';

// will display a users profile, created posts and favorites upon navigation from main page.
const ProfileDisplay = (props) => {

console.log('props', props)

  return (
    <div className="header">
      <img className="main-profile-pic" src={props.userData.imageUrl}></img>
      <ul className="user-info">
        <li>Username: {props.userData.username}</li>
        <li>Email: {props.userData.email}</li>
        <li>Github Profile: {props.userData.gitProfile}</li>
      </ul>
    </div>
  );
};

export default ProfileDisplay;

import * as React from 'react';

// will display a users profile, created posts and favorites upon navigation from main page.
const ProfileDisplay = (props) => {

console.log(props.userData)

  return (
    <div className="header">
      <img className="main-profile-pic" src={props.userData.imageUrl}></img>
    </div>
  );
};

export default ProfileDisplay;

import React from 'react';

function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
      <p>Status: {props.online ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default UserCard;
import React from 'react';

const UserData = ({ user }) => {
  return (
    <div>
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <h1>{`${user.name.first} ${user.name.last}`}</h1>
      <p>Email: {user.email}</p>
      {/* Dodaj więcej szczegółów użytkownika według potrzeb */}
    </div>
  );
};

export default UserData;

import React, { useState } from 'react';
import UserData from './components/UserData';

const App = () => {
  const [user, setUser] = useState(null);

  const fetchRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchRandomUser}>Losuj użytkownika</button>
      {user && <UserData user={user} />}
    </div>
  );
};

export default App;

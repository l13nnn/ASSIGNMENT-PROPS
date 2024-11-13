import React from 'react';
import UserCard from './UserCard.jsx';

function App() {
  const user = {
    name: 'Irene Djaya',
    age: 15,
    email: 'irenedjaya288@gmail.com',
    online: true,
  };

  return (
    <div>
      <UserCard {...user} />
    </div>
  );
}

export default App;
import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function Age(props) {
  return <p>You are {props.age} years old.</p>;
}

function Status(props) {
  return <p>{props.online ? 'Online' : 'Offline'}</p>;
}

function FruitList(props) {
  return (
    <ul>
      {props.fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

function UserCard(props) {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>Age: {props.user.age}</p>
      <p>Email: {props.user.email}</p>
    </div>
  );
}

function App() {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  const user = {
    name: 'Irene Djaya',
    age: 15,
    email: 'irenedjaya288@gmail.com',
  };

  return (
    <div>
      <Greeting name="Irene Djaya" />
      <Age age={15} />
      <Status online={true} />
      <FruitList fruits={fruits} />
      <UserCard user={user} />
    </div>
  );
}

export default App;
import React from 'react';
import ChildButton from './ChildButton.jsx';

class App extends React.Component {
  handleButtonClick = () => {
    alert('Button clicked in child component!');
  };

  render() {
    return (
      <div>
        <h1>Passing Functions as Props</h1>
        <ChildButton onClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default App;
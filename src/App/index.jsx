import React from 'react';
import FeelingList from '../FeelingList';
import CurrentContents from '../CurrentContents';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FeelingList />
        <CurrentContents />
      </div>
    );
  }
}

export default App;

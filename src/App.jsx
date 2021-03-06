import React, {Component} from 'react';
import './App.css';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Markdown Previewer</h1>
        </header>
        <div className="container">
          <Main/>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import MessageBar from "./MessageBar";
import ChatArea from './ChatArea';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatArea />
		{/* <MessageBar /> */}
      </div>
    );
  }
}

export default App;

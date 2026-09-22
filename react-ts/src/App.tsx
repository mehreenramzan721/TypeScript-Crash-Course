import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header title='Hello World'/>
      <Header title='Bye World' color='pink'/>
    </div>
  );
}

export default App;

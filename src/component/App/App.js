import React from 'react';
import About from '../About/About';
import Card from '../Card/Card';
import Favorites from '../Favorites/Favorites';
import List from '../List/List';
import NavBar from '../NavBar/NavBar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Favorites />
      <List />
      <Card />
    </div>
  );
}

export default App;

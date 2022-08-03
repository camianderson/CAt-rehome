import React, {useEffect} from 'react';
import About from '../About/About';
import Card from '../Card/Card';
import Favorites from '../Favorites/Favorites';
import List from '../List/List';
import NavBar from '../NavBar/NavBar';
import './App.css';

const App = () => {
  const getCatData = async () => {
    const URL = "https://petdata-api.herokuapp.com/api/v1/petsData";
    try {
      const response = await fetch(URL);
      const catData = await response.json();
      console.log(catData)
      // setCats?? 
    } catch (error) {
      console.log(error);
    }
  } 

  useEffect(() => {
    getCatData();
  }, []);

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

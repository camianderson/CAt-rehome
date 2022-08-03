import React, {useState, useEffect} from 'react';
import About from '../About/About';
import CatDescription from '../CatDescription/CatDescription';
import Favorites from '../Favorites/Favorites';
import List from '../List/List';
import NavBar from '../NavBar/NavBar';
import {Route} from 'react-router-dom';
import './App.css';

const App = () => {
  const [catsData, setCatsData] = useState([]);
  const [selectedCat, setSelectedCat] = useState({});

  const getCatData = async () => {
    const URL = "https://petdata-api.herokuapp.com/api/v1/petsData";
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setCatsData(data.petsData)
    } catch (error) {
      console.log(error);
    }
  } 
  
  useEffect(() => {
    getCatData();
  }, []);

  const selectCat = (id) => {
    const findCat = catsData.find(cat => cat.id === id);
    setSelectedCat(findCat)
  }

  return (
    <div className="App">
      <NavBar />
      <Route path='/about' render={() => <About />}/>
      <Route path='/favorites' render={() => <Favorites />}/>
      <Route path='/list' render={() => <List cats={catsData} selectCat={selectCat}/>}/>
      <Route path='/cat-description' render={() => <CatDescription cat={selectedCat}/>}/>
    </div>
  );
}

export default App;

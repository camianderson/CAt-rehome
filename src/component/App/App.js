import React, {useState, useEffect} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import About from '../About/About';
import CatDescription from '../CatDescription/CatDescription';
import Error from '../Error/Error';
import Favorites from '../Favorites/Favorites';
import List from '../List/List';
import NavBar from '../NavBar/NavBar';
import './App.css'; 

const App = () => {
  const [catsData, setCatsData] = useState([]);
  const [selectedCat, setSelectedCat] = useState({});
  const [favoriteCats, setFavoriteCats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [picture, setPicture] = useState('');
  const [name, setName] = useState('');

  const getCatData = async () => {
    setIsLoading(true);
    const URL = "https://petdata-api.herokuapp.com/api/v1/petsData";
    try {
      const response = await fetch(URL);
      if (response.ok){
        const data = await response.json();
        setCatsData(data.petsData);
        setIsLoading(false);
        setError(false);
      } else {
        setError(true)
      }
    } catch (error) {
      console.log(error);
      setError(true)
    }
  } 
  
  useEffect(() => {
    getCatData();
  }, []);

  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  }

  const generateRandomCat = () => {
    const allImages = catsData.map(cat => cat.picture)
    const allNames = catsData.map(cat => cat.name)
    const index = getRandomIndex(allImages)
    setPicture(allImages[index])
    setName(allNames[index])
  }

  const selectCat = (id) => {
    const findCat = catsData.find(cat => cat.id === id);
    setSelectedCat(findCat)
  }

  const favoriteCat = (id) => {
    const favCat = catsData.find(cat => cat.id === id);
    setFavoriteCats([...favoriteCats, favCat])
  }


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' render={() => (
          <section className='main-page'>
            <div className='cat-main' onLoad={generateRandomCat()}>
              <div className='name-main'>
                <p>{name}</p>
              </div>
              <div className='border-main-img'>
                <img className='main-img' src={picture} />
              </div>
            </div>
            <Link to='/list'>
              <button className='adopt-button'>Adopt a Cat!</button>
            </Link> 
          </section>
        )}/>
        <Route path='/about' render={() => <About />}/>
        <Route path='/favorites' render={() => <Favorites favCats={favoriteCats} selectCat={selectCat}/>}/>
        {error ? (<Error />) : isLoading ? (<div> Loading...</div>): (<Route path='/list' render={() => <List cats={catsData} selectCat={selectCat}/>}/>)}
        <Route path='/cat-description/:id' render={() => <CatDescription cat={selectedCat} favCat={favoriteCat}/>}/>
        <Route path='*' render={() => <Error />}/>
      </Switch>
    </div>
  );
}

export default App;

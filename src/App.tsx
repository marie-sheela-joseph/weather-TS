import React from 'react';
import './App.css';
import Search from './components/Search';
import { useState } from 'react';

interface IState{
  searchText:string,
  cityData:{},
  weatherData:{}
}
function App() {
  const [state, setState] = useState<IState>({
    searchText: '',
    cityData: {},
    weatherData: {}
  })
  function handleSearchTextChange(e:React.ChangeEvent<HTMLInputElement>) {
    setState((prevState) => {
      return { ...prevState, searchText: e.target.value }
    })
  }
  function handleSearchSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let lat = 0;
    let lon = 0;    
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${state.searchText}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {        
        lat = data[0].lat;
        lon = data[0].lon;
        setState((prevState) => { return { ...prevState, cityData: data[0] } })
      })
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {        
        setState((prevState) => { return { ...prevState, weatherData: data } })
      })
    setState((prevState) => { return { ...prevState, searchText: '' } })
  }
  return (
    <div>
      <h1>React</h1>
      <Search
      searchText={state.searchText}
      handleSearchTextChange={handleSearchTextChange}
      handleSearchSubmit={handleSearchSubmit}
      />
    </div>
  );
}

export default App;

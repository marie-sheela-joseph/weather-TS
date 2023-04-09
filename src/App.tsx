import React from 'react';
import './App.css';
import Search from './components/Search';
import { useState } from 'react';
import DisplayWeather from './components/DisplayWeather';

interface IState{
  searchText:string,
  cityData:{name:'',state:'',country:''},
  weatherData:{main:{feels_like:'',humidity:'',temp:'',temp_max:'',temp_min:''},
              wind:{speed:''}
            }
}
function App() {
  const [state, setState] = useState<IState>({
    searchText: '',
    cityData:{name:'',state:'',country:''},
    weatherData:{main:{feels_like:'',humidity:'',temp:'',temp_max:'',temp_min:''},
  wind:{speed:''}}
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
        console.log(data) 
        lat = data[0].lat;
        lon = data[0].lon;
        setState((prevState) => { return { ...prevState, cityData: data[0] } })
      })
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(data => {        
        console.log(data) 
        setState((prevState) => { return { ...prevState, weatherData: data } })
      })
    setState((prevState) => { return { ...prevState, searchText: '' } })
  }
  return (
    <>
    <header>
      <div className="container">
        <h1>WEATHER</h1>
      </div>
    </header>
    <section className="main">
      <div className="container">
        <div className="d-flex">
          <div>
            <Search
              searchText={state.searchText}
              handleSearchTextChange={handleSearchTextChange}
              handleSearchSubmit={handleSearchSubmit}
            />
            <DisplayWeather
              city={state.cityData.name}
              state={state.cityData.state}
              country={state.cityData.country}
              feelsLike={state.weatherData.main.feels_like}
              humidity={state.weatherData.main.humidity}
              temp={state.weatherData.main.temp}
              tempMin={state.weatherData.main.temp_max}
              tempMax={state.weatherData.main.temp_min}
              windSpeed={state.weatherData.wind.speed}              
            />
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default App;

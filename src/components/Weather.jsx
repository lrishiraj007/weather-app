import React, { Component } from 'react';
import DropDown from './Dropdown';
import Button from './Button';
import 
    WeatherService
   from '../services/WeatherService';
import {
    WEATHER_FIELDS
  } from '../MessageBundle';

export default function Weather() {

   

    const [cityValue, setCityValue] = React.useState(false);
    let [CityInfo,setCityInformation] = React.useState({});
    
    let [showResult, setResult ]= React.useState(false);
    const showInfo =(val)=> {
        setCityValue(val);
        setResult(false);
    } 

    const showWeatherInfo =(val) =>{
        const data = {
            cityId : cityValue 
          };
          console.log(data);
          const weatherAPI = WeatherService(data)
          weatherAPI.then(respone => {
              console.log('response: ', respone.data.data)
              showResult = true;
              setResult(true);
              setCityInformation(respone.data.data);
          }).catch(err => {
              console.log(err)
          })
      
          
          
    }


      
    return(
        <div className="Weather">
          <h1> {WEATHER_FIELDS.HEADING} </h1>
        <DropDown
        
        passValue ={showInfo}
        ></DropDown>

        <Button showWeatherInfo = {showWeatherInfo}></Button>
        {showResult && (<div>
            <br></br>
            <br></br>
            
        <h1> {WEATHER_FIELDS.CITY_HEADING} </h1>
        <hr></hr>
        <h2> {CityInfo.name}</h2> 
         <span>Temparature :</span>  <span>{CityInfo && CityInfo.main && CityInfo.main.temp}</span> <br></br>
         <span> Min Temparature : </span> <span>{CityInfo && CityInfo.main && CityInfo.main.temp_min}</span><br></br>
         <span> Max Temparature : </span> <span>{CityInfo && CityInfo.main && CityInfo.main.temp_max}</span><br></br>
         <span> Win Speed : </span> <span>{CityInfo && CityInfo.wind && CityInfo.wind.speed}</span><br></br>
         <span> Win degree : </span> <span>{CityInfo && CityInfo.wind && CityInfo.wind.deg}</span><br></br>
         <span> Weather : </span> <span>{CityInfo && CityInfo.weather && CityInfo.weather[0].main}</span><br></br>
        </div>)
            
        }
        

        </div>

        
        
    );


}

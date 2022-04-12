import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './weather.css'


 const Weather = ()=> {

  const [latitude,setLatitude] = useState(0)
  const [longitude,setLongitude] = useState(0)
  const [forecast,setForecast]= useState('')
  const [temp,setTemp]= useState(0)
  const [area,setArea]= useState('')
  const [description,setDescription]=useState('')
  const [icon,setIcon]=useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position)=>{
      
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)

    })
    
    axios.get(url).then((response) => {
     
      console.log(response.data)
     setForecast(response.data.daily)
     setTemp(response.data.current.temp)
     setArea(response.data.timezone)
     setDescription(response.data.current.weather[0].description)
     setIcon(response.data.current.weather[0].icon)


    })
  
}, [])

  
  
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_WEATHER}`
 
 
  
  
  
     
      
    
  

  

  return (
    
      
      <div className="container">
        <h2>Your local Weather</h2>
        <div className="top">
          <div className="location">
            <p>{area}</p>
          </div>
          <div className="temp">
            {temp ? <h1>{temp.toFixed()}°C</h1> : null}

          </div>
          <div className='description'>
          {description? <h3>{description}</h3> : null}

          </div>
          <img src = {`http://openweathermap.org/img/w/${icon}.png`}/>
          <h2 style={{color:'deepskyblue',}} >Tomorrows weather</h2>
          <div className="forecast">
            {forecast[0]? <p> {forecast[0].weather[0].main} </p> : null}
          </div>
          <div className="forecast">
            {forecast[0]? <p style={{color:'cadetblue'}}> ({forecast[0].weather[0].description})</p> : null}
          </div>
          <img  src ={`http://openweathermap.org/img/w/${forecast[0].weather[0].icon}.png`}  />
       
        </div>

        



      </div>
    
  );
}

export default Weather;
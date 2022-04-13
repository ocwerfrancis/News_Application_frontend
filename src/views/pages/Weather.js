import React, { useState } from 'react'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import axios from 'axios';

const Weather = () => {
    const [weatherdata, setWeatherdata] = useState(null);
    const [city, setCity] = useState(null)

    const getData = () => {
      axios.post('http://localhost:8000/api/weather/', {
          'city': city
      }, {
          headers: {
              "Content-Type":"application/json"
          }
      }).then( response => {
          console.log("response =>", response.data)
          setWeatherdata(response.data)
          console.log("weather-data =>", weatherdata)
      })
    }

const sendLocation = () => {
    getData()
}

  return (
    <div>
      <IndexNavbar />
      <IndexHeader title="Weather"/>
      <div className='main'
       style={{marginLeft: 200,
        marginRight:200, marginTop: 
        100, marginBottom:100,
         borderRadius:10, 
         backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcLl8_RXftgS0VOmXS_SUTiacipzEeoHKyA&usqp=CAU)", backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
          <div className="search" style={{padding: 50}}>
              <input className='input' 
              type="text" 
              placeholder="Enter your location"
              style={{margin:10, width:850, height: 40, borderRadius:20, color:'black', padding:10}}
              value={city}
              onChange={event => setCity(event.target.value)}
            />
              <button className='button'
               onClick={sendLocation}
               style={{margin:20, borderRadius:20, width:150,height:35}}
               >search</button>
          </div>
          {weatherdata && 
          <div className="information" style={{display:'flex', alignItems:'center', paddingBottom:30, justifyContent:'center', flexDirection:'column', color: 'white'}}>
              <h3 className='location' style={{fontWeight:'normal'}}>{weatherdata.location}</h3>
              <h3 className='time' style={{fontWeight:'normal'}}>{weatherdata.time}</h3>
              <h3 className='info' style={{fontWeight:'normal'}}>{weatherdata.info}</h3>
              <h3 className='temperature' style={{fontWeight:'normal'}}>{weatherdata.weather}   ℃</h3>
          </div>}
          
      </div>
      <SectionNucleoIcons />
        {/* <DemoFooter /> */}
    </div>
  )
}

export default Weather

import React from 'react'
import WIND from '../assets/noun-wind.png'
import PRESSURE from '../assets/noun-barometer.png'
import Humidity from '../assets/noun-humidity.png'
import FEELSLIKE from '../assets/fellslikeblack.png'
import MINTEMP from '../assets/noun-low-temperature.png'
import HIGHTEMP from "../assets/noun-high-temperature.png"
import PERCEPTION from '../assets/noun-weather-icon.png'




import WINDSPEED from '../assets/windspeedblack.png'
// import { WiStrongWind } from "react-icons/wi";

const Forcast = ({forcasttemp,forcasttemp1 ,forcasttemp2 ,forcasttemp3,mintemp,hightemp,preception}) => {
  return (
    <div className=' mt-1'>
      <div className='mb-2'>
        <h2 className='text-black text-3xl font-semibold pr-4 text-center'>Forcast</h2>
      </div>
      <div className='flex justify-between align-middle flex-wrap p-5 gap-y-1 glassmorphic-effect1'>
        
        <div className='text-center w-[135px] ' >
          <img width={75} src={WIND} className='mx-auto'></img>
          <div className="font-semibold">Wind</div>
          <h5>{forcasttemp}m/s</h5>
        </div>

        <div className='text-center w-[135px] ' >
          <img width={60} src={PRESSURE} className='mx-auto'></img>
          <div className="font-semibold">Pressure</div>
          <h5>{forcasttemp1}mb</h5>
        </div>

        <div className='text-center w-[135px] '>
          <img width={60} src={Humidity} className='mx-auto'></img>
          <div className="font-semibold">Humidity</div>
          <h5>{forcasttemp2}%</h5>
        </div>

        <div className='text-center w-[135px] ' >
          <img width={60} src={FEELSLIKE} className='mx-auto'></img>
          <div className="font-semibold">Fells like</div>
          <h5>{forcasttemp3}<sup>°</sup>C</h5>
        </div>

        <div className='text-center w-[135px] '>
          <img width={60} src={MINTEMP} className='mx-auto'></img>
          <div className="font-semibold">Min Temp</div>
          <h5>{mintemp}<sup>°</sup>C</h5>
        </div>

        <div className='text-center w-[135px] '>
          <img width={60} src={HIGHTEMP} className='mx-auto'></img>
          <div className="font-semibold">HighTemp</div>
          <h5>{hightemp}<sup>°</sup>C</h5>
        </div>

        <div className='text-center w-[135px]'>
          <img width={60} src={PERCEPTION} className='mx-auto'></img>
          <div className="font-semibold">Precipitation</div>
          <h5>{preception}</h5>
        </div>
      </div>
    </div>
  )
}

export default Forcast
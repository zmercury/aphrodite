import React from 'react'
import { WeatherWidget, WidgetOne, WidgetTwo, WidgetThree } from './WeatherStack.elements';
import { WiCloudy } from "react-icons/wi";

const WeatherStack = () => {
  return (
    <WeatherWidget>
      <WidgetOne>
        <span></span>
        <span className='temprature'>16°</span>
      </WidgetOne>
      <WidgetTwo>
        <span className='cityName'>London</span>
        <span className='clock'>06:09 - Monday, 9 Sep '19</span>
      </WidgetTwo>
      <WidgetThree>
        <WiCloudy size={60} />
        <span className='weatherStatus'>Cloudy</span>
      </WidgetThree>
    </WeatherWidget>
  )
}

export default WeatherStack;
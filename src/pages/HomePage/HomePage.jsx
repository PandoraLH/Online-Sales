import React from 'react'
import './HomePage.scss'
import TestComponent from '../../components/TestComponent/TestComponent'
import Header from '../../components/Header/Header'
import HomePageComponent from '../../components/HomePageComponent/HomePageComponent'


const HomePage = (props) => {
  return <div className="HomePage">
      <HomePageComponent/>
    </div>
}

export default HomePage
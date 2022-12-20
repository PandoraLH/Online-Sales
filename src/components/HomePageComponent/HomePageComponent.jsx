import React from 'react'
import BackButton from '../BackButton/BackButton'
import FoodCard from '../FoodCard/FoodCard'
import FoodCardList from '../FoodCardList/FoodCardList'
import './HomePageComponent.scss'

const HomePageComponent = (props) => {
  return <div className="HomePageComponent">
    <FoodCardList/>
    </div>
}

export default HomePageComponent
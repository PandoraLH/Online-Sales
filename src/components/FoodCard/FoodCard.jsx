import React from 'react'
import './FoodCard.scss'


const FoodCard = ( { img, name, address, style } ) => {
  return <div className = 'FoodCard tw-border-2 tw-px-5 tw-py-5 tw-select-none tw-cursor-pointer tw-transform tw-transition tw-duration-500 hover:tw-scale-110'
    style = {style}
    >
    <div className = 'tw-flex tw-justify-center'>
      <img src = {img} alt = 'foodcard'></img>
    </div>
    <div className = 'tw-text-center tw-my-auto tw-pt-4  '>
      <div className = 'Name tw-text-2xl tw-font-bold tw-pb-3'>{name}</div>
      <div className = 'Địa chỉ tw-text-sm '>Địa chỉ: {address}</div>
    </div>
</div>
}

export default FoodCard
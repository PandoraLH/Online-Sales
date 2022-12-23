import React from 'react'
import './FoodCard.scss'


const FoodCard = ( { TenQuan, DiaChiKinhDoanh, style, MaDT, setMaDT, handleDoubleClick } ) => {
  return <div className = 'FoodCard tw-border-2 tw-px-5 tw-py-5 tw-select-none tw-cursor-pointer tw-transform tw-transition tw-duration-500 hover:tw-scale-110'
    style = {style}
    onDoubleClick = { () => {
      handleDoubleClick();
      setMaDT(MaDT)
    }}
    >
    <div className = 'tw-flex tw-justify-center'>
      <img src = '/assets/food.png' alt = 'foodcard' width = '150px' height = '150px'></img>
    </div>
    <div className = 'tw-text-center tw-my-auto tw-pt-2  '>
      <div className = 'Name tw-text-2xl tw-font-bold tw-pb-2'>{TenQuan}</div>
      <div className = 'Địa chỉ tw-text-sm '>Địa chỉ: {DiaChiKinhDoanh}</div>
    </div>
</div>
}

export default FoodCard
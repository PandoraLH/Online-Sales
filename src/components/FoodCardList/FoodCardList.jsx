import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './FoodCardList.scss'
import { List } from 'antd';
import FoodCard from '../FoodCard/FoodCard';

const FoodCardList = (props) => {
  const FoodData = [
    {
    'id' : '0',
    'img' : '/assets/food.png',
    'name' : 'Nguyễn Văn A',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM', 
    },
    {
    'id' : '1',
    'img' : '/assets/food.png', 
    'name' : 'Nguyễn Văn B',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    },
    {
      'id' : '2',
    'img' : '/assets/food.png',
    'name' : 'Nguyễn Văn C',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    },
    {
      'id' : '3',
    'img' : '/assets/food.png',
    'name' : 'Nguyễn Văn D',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    },
    {
      'id' : '4',
    'img' : '/assets/food.png',
    'name' : 'Nguyễn Văn E',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    },
    {
      'id' : '5',
    'img' : '/assets/food.png',
    'name' : 'Nguyễn Văn F',
    'address': '123456 Đường Võ Thị Sáu, TP.HCM',
    },
    {
      'id' : '6',
      'img' : '/assets/food.png',
      'name' : 'Nguyễn Văn 1',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM', 
      },
      {
        'id' : '7',
      'img' : '/assets/food.png', 
      'name' : 'Nguyễn Văn 2',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      },
      {
        'id' : '8',
      'img' : '/assets/food.png',
      'name' : 'Nguyễn Văn 3',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      },
      {
        'id' : '9',
      'img' : '/assets/food.png',
      'name' : 'Nguyễn Văn 4',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      },
      {
        'id' : '10',
      'img' : '/assets/food.png',
      'name' : 'Nguyễn Văn 5',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      },
      {
        'id' : '11',
      'img' : '/assets/food.png',
      'name' : 'Nguyễn Văn 6',
      'address': '123456 Đường Võ Thị Sáu, TP.HCM',
      },
  ]

  return <div className="FoodCardList tw-py-10 tw-mx-auto tw-flex tw-flex-wrap tw-max-w-4xl">
    <List
      grid={{
        column: 3,  
      }}
      dataSource={FoodData}
      pagination={{
        pageSize: 6,
      }}
      renderItem={(item) => (
        <List.Item>
           <FoodCard {...item} />
        </List.Item>
      )}
    />

</div>
}

export default FoodCardList
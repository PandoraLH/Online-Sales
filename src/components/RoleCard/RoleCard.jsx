import React from 'react'
import './RoleCard.scss'
import { Card } from 'antd';

const { Meta } = Card;

const RoleCard = ({ title, imgsrc, style, tab, setTab, index }) => {
  return <div className="RoleCard">
    <div>
  <Card
    hoverable
    cover={<img alt={title} src={imgsrc} width = '500px' height = '500px'/>}
    style = {style}
    onClick = {() => setTab(index)}
  >
    <Meta title={title} />
  </Card>
  </div>
  </div>
}

export default RoleCard
import React from 'react'
import './TestComponent1.scss'
import { Card } from 'antd'

const { Meta } = Card;


const TestComponent1 = (props) => {
  return <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
}

export default TestComponent1
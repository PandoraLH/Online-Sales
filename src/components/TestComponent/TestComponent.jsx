import React from 'react'
import './TestComponent.scss'
import { Card } from 'antd'
import TestComponent1 from '../TestComponent1/TestComponent1';

const { Meta } = Card;


const TestComponent = (props) => {
    return <div className = 'container tw-flex tw-max-w-full'>
      <div className = '10 col tw-flex'>
        <TestComponent1/>
        <TestComponent1/>
        <TestComponent1/>
        <TestComponent1/>
        <TestComponent1/>
        <TestComponent1/>
        <TestComponent1/>
        <TestComponent1/>
        <TestComponent1/>
        <TestComponent1/>
      </div>
      <div className = '2 col tw-flex'>
        <TestComponent1/>
        <TestComponent1/>
      </div>
    </div>
}

export default TestComponent
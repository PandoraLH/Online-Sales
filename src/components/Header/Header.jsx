import React  from 'react'
import './Header.scss'
import { useNavigate } from 'react-router-dom'



const Header = (props) => {
  const navigate = useNavigate()

  return (
    <div className="Header tw-px-24 tw-flex tw-flex-row tw-p-5 tw-fixed tw-w-screen tw-top-0 tw-justify-between">
      <div className='tw-flex tw-flex-row tw-items-center '>
        <img src='/assets/logo.png' alt='logo' width='40px' height='40px'
          onClick={() => navigate("/homepage")}
          ></img>
        <div className='tw-font-bold tw-ml-6 tw-text-3xl tw-text-black'
          onClick={() => navigate("/homepage")}
          >ABC Food</div>
      </div>
      <div className='tw-flex tw-flex-row tw-items-center'>
        <div className=' tw-text-black tw-font-semibold tw-text-lg'>
            Đối tác
        </div>
        <div className='tw-ml-14 tw-text-black tw-font-semibold tw-text-lg'>
            Tài xế
        </div>
        <div className = 'RegBtn tw-px-4 tw-py-2 tw-bg-white tw-font-semibold tw-text-xl tw-ml-16'
          onClick={() => navigate('/login')}>
          Đăng nhập
        </div>
      </div>
    </div>)
}

export default Header
import React from 'react'
import './SignUpOwner.scss'
import InputForm from "../../components/InputForm/InputForm";


const SignUpOwner = (props) => {
  return <div className="SignUpOwner tw-flex tw-justify-center">
    <div className = 'card tw-flex tw-justify-center'>
      <div className = 'form '>
        <div className = 'title'>
          Nhập thông tin 
        </div>
        <InputForm title = "Nhập Email" placeholder = 'Nhập Email'/>
        <InputForm title = "Nhập Tên Quán/ Nhà Hàng" placeholder = 'Nhập Tên Quán/ Nhà Hàng'/>
        <InputForm title = "Người Đại Diện" placeholder = 'Người Đại Diện'/>
        <InputForm title = "Địa chỉ kinh doanh" placeholder = 'Địa chỉ kinh doanh'/>
        <InputForm title = "Quận/Huyện" placeholder = 'Quận/Huyện'/>
        <InputForm title = "Thành phố" placeholder= 'Thành phố'/>
        <InputForm title = "Loại Thực Phẩm" placeholder= 'Loại Thực Phẩm'/>
        <InputForm title = "Số Lượng Chi Nhánh" placeholder= 'Số Lượng Chi Nhánh'/>
        <InputForm title = "Số lượng đơn hàng mỗi ngày" placeholder= 'Số lượng đơn hàng mỗi ngày'/>

      </div>

    </div>
  </div>
}

export default SignUpOwner
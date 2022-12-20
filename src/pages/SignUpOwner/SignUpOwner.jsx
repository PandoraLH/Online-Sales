import React from 'react'
import './SignUpOwner.scss'
import InputForm from "../../components/InputForm/InputForm";
import { useNavigate  } from "react-router-dom";
import { Button  } from "antd";


const SignUpOwner = (props) => {
  const navigate = useNavigate();

  return <div className="SignUpOwner tw-pt-10">
    <div className = 'card tw-flex tw-flex-col tw-justify-center tw-mx-auto '>
      <div className = 'title tw-flex tw-justify-center tw-text-3xl'>
          Nhập thông tin 
      </div>
      <div className = 'input tw-flex tw-flex-col tw-mx-auto tw-text-3xl'>
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
    <div className="RoleButton tw-flex tw-flex-row tw-py-10 tw-justify-center tw-space-x-40 ">
        <div>
          <Button
            className="button1"
            type="primary"
            shape="round"
            style={{ width: "150px", height: "40px", 'background-color': 'red' }}
            onClick={() => navigate(-1)}
          >
            QUAY LẠI
          </Button>
        </div>

        <div>
          <Button
            className="button2"
            type="primary"
            shape="round"
            style={{ backgroundColor: "blue", width: "150px", height: "40px" }}
            onClick={() => navigate('/homepage')}
          >
            TIẾP TỤC
          </Button>
        </div>
      </div>
  </div>
}

export default SignUpOwner
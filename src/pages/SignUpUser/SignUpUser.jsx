import React from 'react'
import './SignUpUser.scss'
import InputForm from "../../components/InputForm/InputForm";
import { useNavigate  } from "react-router-dom";
import { Button  } from "antd";

const SignUpUser = (props) => {
  const navigate = useNavigate();

  return <div className="SignUpUser tw-pt-10">
    <div className = 'card tw-flex tw-flex-col tw-justify-center tw-mx-auto '>
      <div className = 'title tw-flex tw-justify-center tw-text-3xl'>
          Nhập thông tin 
      </div>
      <div className = 'input tw-flex tw-flex-col tw-mx-auto tw-text-3xl'>
        <InputForm title = "Họ Tên" placeholder = 'Nhập Họ Tên'/>
        <InputForm title = "Số Điện Thoại" placeholder = 'Nhập Số Điện Thoại'/>
        <InputForm title = "Địa Chỉ" placeholder = 'Nhập Địa Chỉ'/>
        <InputForm title = "Email" placeholder = 'Nhập Email'/>
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

export default SignUpUser
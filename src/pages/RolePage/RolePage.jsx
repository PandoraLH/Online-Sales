import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Button, notification } from "antd";
import RoleHeader from "../../components/RoleHeader/RoleHeader";
import RoleCardList from "../../components/RoleCardList/RoleCardList";
import "./RolePage.scss";
import InputForm from "../../components/InputForm/InputForm";
import BackButton from "../../components/BackButton/BackButton";


const RolePage = (props) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(-1);
  const [IDInput, setIDInput] = useState("");
  const RoleData = [
    {
      name: "owener",
      title: "Đối tác",
      imgsrc: "/assets/owner_logo.png",
    },
    {
      name: "driver",
      title: "Tài xế",
      imgsrc: "/assets/driver_logo.png",
    },
    {
      name: "user",
      title: "Người Dùng",
      imgsrc: "/assets/customer_logo.png",
    },
  ];

  const handleClick = (tab) => {
    {tab === 0 && (
      navigate('/owner')
    )}
    {tab === 1 && (
      navigate('/driver')
    )}
    {tab === 2 && (
      navigate(`/home/${IDInput}`)
    )}
  };

  const handleSignUpClick = (tab) => {
    {tab === 0 && (
      navigate('/role/signupowner')
    )}
    {tab === 1 && (
      navigate('/role/signupdriver')
    )}
    {tab === 2 && (
      navigate('/role/signupuser')
    )} 
  };
  
  

  return (
    <div className="RolePage">
      <RoleHeader />
      <RoleCardList tab={tab} setTab={setTab} RoleData={RoleData} />
      <div className="bonus-role-container tw-mt-5 tw-flex tw-justify-center">
        {tab === 0 && (
          <InputForm
            title="Nhập ID Đối tác"
            placeholder="ID Đối tác"
            setInput={setIDInput}
          />
        )}
        {tab === 1 && (
          <InputForm
            title="Nhập ID Tài xế"
            placeholder="ID Tài xế"
            setInput={setIDInput}
          />
        )}
        {tab === 2 && (
          <InputForm
            title="Nhập ID Khách Hàng"
            placeholder="ID Khách Hàng"
            setInput={setIDInput}
          />
        )}
      </div>
      <div className="RoleButton tw-flex tw-flex-row tw-mt-5 tw-justify-center tw-space-x-40 ">
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
            onClick={() => handleClick(tab)}
          >
            TIẾP TỤC
          </Button>
        </div>
      </div>

      <div className = 'tw-flex tw-justify-center tw-text-xl tw-py-3'> Chưa có tài khoản ? </div>
      <div className = 'tw-flex tw-justify-center'>
        <Button
          type="primary"
          shape="round"
          style={{ backgroundColor: "blue", width: "150px", height: "40px" }}
          onClick={() => handleSignUpClick(tab)}
          > ĐĂNG KÝ </Button>
      </div>
    </div>
  );
};
export default RolePage;
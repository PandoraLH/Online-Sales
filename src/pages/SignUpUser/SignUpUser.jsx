import React, { useState } from "react";
import "./SignUpUser.scss";
import InputForm from "../../components/InputForm/InputForm";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import Fetch from "../../fetch";
import { notification } from "antd";

const SignUpUser = (props) => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");

  return (
    <div className="SignUpUser tw-pt-10">
      <div className="card tw-flex tw-flex-col tw-justify-center tw-mx-auto ">
        <div className="title tw-flex tw-justify-center tw-text-3xl">
          Nhập thông tin
        </div>
        <div className="input tw-flex tw-flex-col tw-mx-auto tw-text-3xl">
        <InputForm
            title="ID Khách Hàng"
            placeholder="Nhập ID Khách Hàng"
            setInput={setUserId}
          />
          <InputForm
            title="Họ Tên"
            placeholder="Nhập Họ Tên"
            setInput={setName}
          />
          <InputForm
            title="Số Điện Thoại"
            placeholder="Nhập Số Điện Thoại"
            setInput={setPhone}
          />
          <InputForm
            title="Địa Chỉ"
            placeholder="Nhập Địa Chỉ"
            setInput={setAddress}
          />
          <InputForm
            title="Email"
            placeholder="Nhập Email"
            setInput={setEmail}
          />
        </div>
      </div>
      <div className="RoleButton tw-flex tw-flex-row tw-py-10 tw-justify-center tw-space-x-40 ">
        <div>
          <Button
            className="button1"
            type="primary"
            shape="round"
            style={{
              width: "150px",
              height: "40px",
              "background-color": "red",
            }}
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
            onClick={async () => {
              try {
                const response = await Fetch(
                  "POST",
                  "http://localhost:3000/api/v1/KhachHang",
                  {
                    MaKH: userId,
                    HoTen: Name,
                    DiaChi: Address,
                    SDT: Phone,
                    Email: Email,
                  }
                );
                if (response["result"] === "thanh cong") {
                  notification.success({
                    message: "Thành công",
                    description: `Thêm Khách Hàng thành công`,
                    placement: "bottomRight",
                  });
                  navigate(`/home/${userId}`);
                  return true;
                }
              } catch (e) {
                console.error(e);
              }
              notification.error({
                message: "Thất bại",
                description: `ID Khách Hàng đã tồn tại`,
                placement: "bottomRight",
              });
            }}
          >
            TIẾP TỤC
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpUser;

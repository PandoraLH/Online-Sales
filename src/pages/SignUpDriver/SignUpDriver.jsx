import React, { useState } from "react";
import "./SignUpDriver.scss";
import InputForm from "../../components/InputForm/InputForm";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import Fetch from "../../fetch";
import { notification } from "antd";

const SignUpDriver = (props) => {
  const navigate = useNavigate();

  const [DriverID, setDriverID] = useState("");
  const [Name, setName] = useState("");
  const [CCCD, setCCCD] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [CarNumber, setCarNumber] = useState("");
  const [ActivePlace, setActivePlace] = useState("");
  const [Email, setEmail] = useState("");
  const [Bank, setBank] = useState("");

  return (
    <div className="SignUpDriver tw-pt-10">
      <div className="card tw-flex tw-flex-col tw-justify-center tw-mx-auto ">
        <div className="title tw-flex tw-justify-center tw-text-3xl">
          Nhập thông tin
        </div>
        <div className="input tw-flex tw-flex-col tw-mx-auto tw-text-3xl">
          <InputForm
            title="Driver ID"
            placeholder="Nhập DriverID"
            setInput={setDriverID}
          />
          <InputForm
            title="Họ Tên"
            placeholder="Nhập Họ Tên"
            setInput={setName}
          />
          <InputForm title="CCCD" placeholder="Nhập CCCD" setInput={setCCCD} />
          <InputForm
            title="Điện Thoại"
            placeholder="Nhập Số Điện Thoại"
            setInput={setPhone}
          />
          <InputForm
            title="Địa chỉ"
            placeholder="Nhập Địa chỉ"
            setInput={setAddress}
          />
          <InputForm
            title="Biển Số Xe"
            placeholder="Nhập Biển Số Xe"
            setInput={setCarNumber}
          />
          <InputForm
            title="Khu Vực Hoạt Động"
            placeholder="Nhập Khu Vực Hoạt Động"
            setInput={setActivePlace}
          />
          <InputForm
            title="Email"
            placeholder="Nhập Email"
            setInput={setEmail}
          />
          <InputForm
            title="Tài Khoản Ngân Hàng"
            placeholder="Nhập Tài Khoản Ngân Hàng"
            setInput={setBank}
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
                  "http://localhost:3000/api/v1/TaiXe",
                  {
                    MaTX: DriverID,
                    HoTen: Name,
                    CCCD: CCCD,
                    SDT: Phone,
                    DiaChi: Address,
                    BienSoXe: CarNumber,
                    KhuVucHoatDong: ActivePlace,
                    Email: Email,
                    STKNganHang: Bank,
                    PhiTheChan: 600000,
                  }
                );
                if (response["result"] === "thanh cong") {
                  notification.success({
                    message: "Thành công",
                    description: `Thêm Tài xế thành công`,
                    placement: "bottomRight",
                  });
                  navigate(`/driver/${DriverID}`);
                  return true;
                }
              } catch (e) {
                console.error(e);
              }
              notification.error({
                message: "Thất bại",
                description: `ID Tài xế đã tồn tại`,
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

export default SignUpDriver;

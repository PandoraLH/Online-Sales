import React, { useState } from "react";
import "./SignUpOwner.scss";
import InputForm from "../../components/InputForm/InputForm";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import Fetch from "../../fetch";
import { notification } from "antd";

const SignUpOwner = (props) => {
  const navigate = useNavigate();

  const [OwnerID, setOwnerID] = useState("");
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [People, setPeople] = useState("");
  const [Address, setAddress] = useState("");
  const [District, setDistrict] = useState("");
  const [City, setCity] = useState("");
  const [TypeFood, setTypeFood] = useState("");
  const [StoreNumber, setStoreNumber] = useState("");
  const [Order, setOrder] = useState("");
  const [Bank, setBank] = useState("");

  return (
    <div className="SignUpOwner tw-pt-10">
      <div className="card tw-flex tw-flex-col tw-justify-center tw-mx-auto ">
        <div className="title tw-flex tw-justify-center tw-text-3xl">
          Nhập thông tin
        </div>
        <div className="input tw-flex tw-flex-col tw-mx-auto tw-text-3xl">
          <InputForm
            title="Nhập mã Đối tác"
            placeholder="Nhập mã Đối tác"
            setInput={setOwnerID}
          />
          <InputForm
            title="Nhập Email"
            placeholder="Nhập Email"
            setInput={setEmail}
          />
          <InputForm
            title="Nhập Tên Quán/ Nhà Hàng"
            placeholder="Nhập Tên Quán/ Nhà Hàng"
            setInput={setName}
          />
          <InputForm
            title="Người Đại Diện"
            placeholder="Người Đại Diện"
            setInput={setPeople}
          />
          <InputForm
            title="Địa chỉ kinh doanh"
            placeholder="Địa chỉ kinh doanh"
            setInput={setAddress}
          />
          <InputForm
            title="Quận/Huyện"
            placeholder="Quận/Huyện"
            setInput={setDistrict}
          />
          <InputForm
            title="Thành phố"
            placeholder="Thành phố"
            setInput={setCity}
          />
          <InputForm
            title="Loại Thực Phẩm"
            placeholder="Loại Thực Phẩm"
            setInput={setTypeFood}
          />
          <InputForm
            title="Số Lượng Chi Nhánh"
            placeholder="Số Lượng Chi Nhánh"
            setInput={setStoreNumber}
          />
          <InputForm
            title="Số lượng đơn hàng mỗi ngày"
            placeholder="Số lượng đơn hàng mỗi ngày"
            setInput={setOrder}
          />
          <InputForm
            title="Tài khoản ngân hàng"
            placeholder=" NhậpTài khoản ngân hàng"
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
                  "http://localhost:3000/api/v1/DoiTac",
                  {
                    MaDT: OwnerID,
                    TenQuan: Email,
                    DiaChiKinhDoanh: Name,
                    LoaiThucPham: People,
                    NguoiDaiDien: Address,
                    ThanhPho: District,
                    Quan_Huyen: City,
                    SoLuongChiNhanh: TypeFood,
                    SoLuongDonHangMoiNgay: StoreNumber,
                    Email: Order,
                    TaiKhoanNganHang: Bank,
                  }
                );
                if (response["result"] === "successfully") {
                  notification.success({
                    message: "Thành công",
                    description: `Thêm Đối tác thành công`,
                    placement: "bottomRight",
                  });
                  navigate(`/owner/${OwnerID}`);
                  return true;
                }
              } catch (e) {
                console.error(e);
              }
              notification.error({
                message: "Thất bại",
                description: `ID đối tác đã tồn tại`,
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

export default SignUpOwner;

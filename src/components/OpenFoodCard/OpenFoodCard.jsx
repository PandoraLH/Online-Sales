import React, { useState, useEffect } from "react";
import "./OpenFoodCard.scss";
import { Table, notification, Popconfirm, Spin } from "antd";
import Fetch from "../../fetch";

const OpenFoodCard = ({ MaDT, userId }) => {

  console.log(MaDT)
  console.log(Object.values(userId)[0])
  const [ThucDon, setThucDon] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchThucDon = async () => {
      try {
        const response = await Fetch(
          "POST",
          "http://localhost:3000/api/v1/DoiTac/ThucDon",
          {
            MaDT: MaDT,
          }
        );
        setThucDon(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchThucDon();

    return () => abortController.abort();
  }, [MaDT]);

  const columns = [
    {
      title: "Tên Món",
      dataIndex: "TenMon",
      key: "TenMon",
      width: "20%",
    },
    {
      title: "Đơn giá",
      dataIndex: "DonGia",
      key: "DonGia",
      width: "20%",
    },
    {
      title: "Tình trạng món",
      dataIndex: "TinhTrangMon",
      key: "TinhTrangMon",
      width: "20%",
    },
    {
      title: "Số Like",
      dataIndex: "SoLike",
      key: "SoLike",
      width: "10%",
    },
    {
      title: "Số Dislike",
      dataIndex: "SoDislike",
      key: "SoDislike",
      width: "10%",
    },
    {
      title: "Action",
      key: "Action",
      render: (_, record) => (
        <Popconfirm
          title="Bạn có muốn chọn món ăn này"
          onConfirm={async () => {
            try {
              const response = await Fetch(
                "POST",
                "http://localhost:3000/api/v1/KhachHang/dathang",
                {
                  MaKH: Object.values(userId)[0],
                  DiaChiDH: "Hai Ba Trung Quan",
                  MaDT: MaDT,
                  TenMon1: record.TenMon,
                }
              );
              if (response["result"] === "thanh cong") {
                notification.success({
                  message: "Thành công",
                  description: `Thêm Món thành công`,
                  placement: "bottomRight",
                });
                return true;
              }
            } catch (e) {
              console.error(e);
            }
            notification.error({
              message: "Thất bại",
              description: `Thêm Món Thất Bại`,
              placement: "bottomRight",
            });
          }}
          okText="Có"
          cancelText="Không"
        >
          <a href="#">Đặt hàng</a>
        </Popconfirm>
      ),
      width: "20%",
    },
  ];

  return (
    <div className="OpenFoodCard">
      <Table
        className="Food"
        columns={columns}
        dataSource={ThucDon[0]}
        pagination={{ pageSize: 6 }}
      />
    </div>
  );
};

export default OpenFoodCard;

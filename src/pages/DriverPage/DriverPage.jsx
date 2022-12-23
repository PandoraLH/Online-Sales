import React, { useState, useEffect } from "react";
import "./DriverPage.scss";
import Fetch from "../../fetch";
import { Table, notification, Popconfirm, Spin } from "antd";

const DriverPage = (props) => {
  const [DriverData, setDriverData] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    const fetchDriver = async () => {
      try {
        const response = await Fetch(
          "GET",
          "http://localhost:3000/api/v1/DonDatHang/getDonDatHangForTaiXe"
        );
        setDriverData(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDriver();

    return () => abortController.abort();
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
    },
    {
      title: "Mã đơn hàng",
      dataIndex: "MaDH",
    },
    {
      title: "Tổng tiền",
      dataIndex: "TongTienCacMon",
    },
    {
      title: "Địa chỉ",
      dataIndex: "DiaChiDH",
    },
    {
      title: "Mã khách hàng",
      dataIndex: "KH10014",
    },
    {
      title: "Mã Đối tác",
      dataIndex: "MaDT",
    },
    {
      title: "Trạng thái đơn hàng",
      dataIndex: "TrangThaiDH",
    },
    {
      title: "Action",
      key: "Action",
      render: (_, record) => (
        <Popconfirm
          title="Bạn có muốn Nhận đơn hàng này ko"
          okText="Có"
          cancelText="Không"
        >
          <a href="#">Chọn đơn</a>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="DriverPage">
      <div className="tw-font-bold tw-text-4xl tw-py-12 tw-flex tw-justify-center">
        Đơn hàng
      </div>
      <div className="tw-px-20">
        <Table
          className="Booking"
          columns={columns}
          dataSource={DriverData}
          pagination={{ pageSize: 6 }}
        />
      </div>
    </div>
  );
};

export default DriverPage;

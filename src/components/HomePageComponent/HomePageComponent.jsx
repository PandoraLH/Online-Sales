import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import FoodCardList from "../FoodCardList/FoodCardList";
import "./HomePageComponent.scss";
import Fetch from "../../fetch";
import { Button } from "antd";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TableComponent from "../TableComponent/TableComponent";


const HomePageComponent = (props) => {
  const [DTData, setDTData] = useState([]);
  const [MaDT, setMaDT] = useState(-1);

  const userId = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchDT = async () => {
      try {
        const response = await Fetch(
          "GET",
          "http://localhost:3000/api/v1/DoiTac"
        );
        setDTData(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchDT();

    return () => abortController.abort();
  }, []);

  const [UserCart, setUserCart] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    const fetchUser = async () => {
      try {
        const response = await Fetch(
          "GET",
          `http://localhost:3000/api/v1/DonDatHang/getDonDatHangByMaKH/MaKH?MaKH=${Object.values(userId)[0]}`
        );
        setUserCart(response);
      } catch (e) {
        console.error(e);
      }
    };
    fetchUser();

    return () => abortController.abort();
  }, []);

  const columns = [
    {
        title: "Mã Đơn Hàng",
        dataIndex: "MaDH",
    },
    {
        title: "Tổng tiền các món",
        dataIndex: "TongTienCacMon",
    },
    {
        title: "Trạng Thái Đơn Hàng",
        dataIndex: "TrangThaiDH",
    },
    {
        title: "Thời gian đặt hàng",
        dataIndex: "ThoiGianDatHang",
    },
    {
        title: "Tổng tiền đơn hàng",
        dataIndex: "TongTienDH",
    },
    {
        title: "Mã Tài Xế",
        dataIndex: "MaTX",
    },
    {
      title: "Mã Đối Tác",
      dataIndex: "MaDT",
  },
];


  return (
    <div className="HomePageComponent">
      <Tabs className="Tabs tw-pt-2">
        <TabList className="Option tw-flex tw-max-w-3xl tw-mx-auto tw-mt-10 tw-text-2xl tw-cursor-pointer tw-select-none">
          <Tab className="Option_1 tw-flex-1 tw-text-center tw-py-5 tw-rounded-none	">
            Đặt hàng
          </Tab>
          <Tab className="Option_2 tw-flex-1 tw-text-center tw-py-5 tw-rounded-none	">
            Giỏ hàng
          </Tab>
        </TabList>
        <TabPanel>
          <div className="tw-flex tw-flex-col tw-items-center">
            <FoodCardList
              DTData={DTData[0]}
              MaDT={MaDT}
              setMaDT={setMaDT}
              userId={userId}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className = 'tw-px-36 tw-py-10'>
            <TableComponent columns={columns} data = {UserCart}/>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HomePageComponent;

import React, { useState, useEffect } from "react";
import "./DriverPage.scss";
import Fetch from "../../fetch";
import { Table, notification, Popconfirm, Spin } from "antd";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TableComponent from "../../components/TableComponent/TableComponent";

const DriverPage = (props) => {
    const { driverId } = useParams();

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
                    title="Bạn có muốn Nhận đơn hàng này ko?"
                    okText="Có"
                    cancelText="Không"
                    onConfirm={async () => {
                        try {
                            const response = await Fetch(
                                "PUT",
                                "http://localhost:3000/api/v1/TaiXe/chooseDonDatHang",
                                {
                                    MaTX: driverId,
                                    MaDH: record.MaDH,
                                }
                            );
                            if (response["result"] === "thanh cong") {
                                notification.success({
                                    message: "Thành công",
                                    description: `Nhận đơn thành công`,
                                    placement: "bottomRight",
                                });
                                return true;
                            }
                        } catch (e) {
                            console.error(e);
                        }
                        notification.error({
                            message: "Thất bại",
                            placement: "bottomRight",
                        });
                    }}
                >
                    <a href="#">Chọn đơn</a>
                </Popconfirm>
            ),
        },
    ];

    const column_cart = [
        {
            title: "Mã đơn hàng",
            dataIndex: "MaDH",
        },
        {
            title: "Mã khách hàng",
            dataIndex: "MaKH",
        },
        {
            title: "Mã đối tác",
            dataIndex: "MaDT",
        },
        {
            title: "Địa chỉ",
            dataIndex: "DiaChiDH",
        },
        {
            title: "Thời gian đặt hàng",
            dataIndex: "ThoiGianDatHang",
        },
        {
            title: "Tổng tiền các món",
            dataIndex: "TongTienCacMon",
        },
        {
            title: "Tổng tiền đơn hàng",
            dataIndex: "TongTienDH",
        },
        {
            title: "Trạng thái đơn hàng",
            dataIndex: "TrangThaiDH",
        },
    ];

    const [DriverCart, setDriverCart] = useState([]);
    useEffect(() => {
        const abortController = new AbortController();
        const fetchUser = async () => {
            try {
                const response = await Fetch(
                    "GET",
                    `http://localhost:3000/api/v1/TaiXe/getDonDatHangOfTaiXe?MaTX=${driverId}`
                );
                setDriverCart(response);
            } catch (e) {
                console.error(e);
            }
        };
        fetchUser();

        return () => abortController.abort();
    }, []);
console.log(DriverCart);

    return (
        <div className="DriverPage">
            <Tabs className="Tabs tw-pt-2">
                <TabList className="Option tw-flex tw-max-w-3xl tw-mx-auto tw-mt-10 tw-text-2xl tw-cursor-pointer tw-select-none">
                    <Tab className="Option_1 tw-flex-1 tw-text-center tw-py-5 tw-rounded-none	">
                        Đơn hàng có sẵn
                    </Tab>
                    <Tab className="Option_2 tw-flex-1 tw-text-center tw-py-5 tw-rounded-none	">
                        Đơn hàng bạn đã nhận
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="tw-flex tw-flex-col tw-items-center tw-pt-8">
                        <Table
                            columns={columns}
                            dataSource={DriverData}
                            pagination={{ pageSize: 6 }}
                        />
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="tw-flex tw-flex-col tw-items-center tw-pt-8">
                        <TableComponent
                            columns={column_cart}
                            data={DriverCart}
                        />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default DriverPage;

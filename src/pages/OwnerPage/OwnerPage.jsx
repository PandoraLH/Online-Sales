import React from "react";
import "./OwnerPage.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TableComponent from "../../components/TableComponent/TableComponent";

const OwnerPage = (props) => {
    const columns = [
        {
            title: "STT",
            dataIndex: "stt",
        },
        {
            title: "Mã đơn hàng",
            dataIndex: "madonhang",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Tổng tiền",
            dataIndex: "tongtien",
        },
        {
            title: "Địa chỉ",
            dataIndex: "diachi",
        },
        {
            title: "Mã khách hàng",
            dataIndex: "makh",
        },
    ];
    const data = [
        {
            key: "1",
            stt: 1,
            madonhang: "MDH10001",
            tongtien: 463032,
            diachi: "479 Vernon Road",
            makh: "KH10014",
        },
        {
            key: "2",
            stt: 2,
            madonhang: "MDH10006",
            tongtien: 1134156,
            diachi: "850 Main Circle",
            makh: "KH10028",
        },
        {
            key: "3",
            stt: 3,
            madonhang: "MDH10015",
            tongtien: 446559,
            diachi: "17 Carpenter Hill",
            makh: "KH10066",
        },
        {
            key: "4",
            stt: 4,
            madonhang: "MDH10037",
            tongtien: 168506,
            diachi: "57426 Main Avenue",
            makh: "KH10068",
        },
        {
            key: "5",
            stt: 5,
            madonhang: "MDH10042",
            tongtien: 539528,
            diachi: "46 Springview Drive",
            makh: "KH10071",
        },
    ];
    const menu_columns = [
        {
            title: "Tên món",
            dataIndex: "tenmon",
            render: (text) => <a>{text}</a>,
        },
    ];

    const menu_data = [
        {
            key: "1",
            tenmon: "Jackie Beazley",
        },
        {
            key: "2",
            tenmon: "Boycie Wigan",
        },
        {
            key: "3",
            tenmon: "Doyle Alvarado",
        },
        {
            key: "4",
            tenmon: "Hollie Brahmer",
        },
        {
            key: "5",
            tenmon: "Wat Laytham",
        },
        {
            key: "6",
            tenmon: "Pizza hải sản",
        },
        {
            key: "7",
            tenmon: "Jocko Messer",
        },
        {
            key: "8",
            tenmon: "Burtie Ruusa",
        },
        {
            key: "9",
            tenmon: "Bianka Wagen",
        },
        {
            key: "10",
            tenmon: "Blondell Batters",
        },
    ];
    const chiTietHopDong = [
        {
            maSoThue: "MST58025",
            maDoiTac: "DT582181",
            ngayKyHopDong: "14/12/2020",
            phiKichHoat: "2000000",
        },
    ];

    return (
        <div className="OwnerPage">
            <Tabs className="Tabs">
                <TabList>
                    <Tab>Hợp đồng</Tab>
                    <Tab>Cửa hàng</Tab>
                    <Tab>Đơn hàng</Tab>
                </TabList>

                <TabPanel>
                    <div className="container">
                        <div>Mã số thuế: {chiTietHopDong[0].maSoThue}</div>
                        <div>Mã đối tác: {chiTietHopDong[0].maDoiTac}</div>
                        <div>
                            Ngày ký hợp đồng: {chiTietHopDong[0].ngayKyHopDong}
                        </div>
                        <div>
                            Phí kích hoạt: {chiTietHopDong[0].phiKichHoat}
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="tw-font-bold tw-text-3xl tw-inline-block tw-mt-2">
                        Thực đơn
                    </div>

                    <div className="tw-px-80 tw-mt-4">
                        <TableComponent
                            columns={menu_columns}
                            data={menu_data}
                        />
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="tw-px-20 tw-mt-16">
                        <TableComponent columns={columns} data={data} />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OwnerPage;

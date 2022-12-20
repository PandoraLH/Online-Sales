import React from "react";
import "./DriverPage.scss";
import TableComponent from "../../components/TableComponent/TableComponent";

const DriverPage = (props) => {
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

    return (
        <div className="DriverPage">
            <div className="tw-font-bold tw-text-4xl tw-py-12 tw-flex tw-justify-center">
                Đơn hàng
            </div>
            <div className="tw-px-20">
                <TableComponent columns={columns} data={data} />
            </div>
        </div>
    );
};

export default DriverPage;

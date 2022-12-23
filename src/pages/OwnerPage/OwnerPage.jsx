import React, { useState, useEffect } from "react";
import "./OwnerPage.scss";
import TableComponent from "../../components/TableComponent/TableComponent";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Fetch from "../../fetch";

const OwnerPage = (props) => {
    return (
        <div className="OwnerPage">
            <ul className="tw-px-20">
                <li>
                    <Link className="text-link" to="contract">
                        Hợp đồng
                    </Link>
                </li>
                <li>
                    <Link className="text-link" to="menu">
                        Thực đơn
                    </Link>
                </li>
                <li>
                    <Link className="text-link" to="order">
                        Đơn hàng
                    </Link>
                </li>
                <li className="tw-float-right">
                    <Link className="text-link" to="edit-info">
                        Sửa thông tin
                    </Link>
                </li>
            </ul>

            <Routes>
                <Route path="/contract" element={<Contract />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/order" element={<Order />} />
                <Route path="/edit-info" element={<Edit />} />
            </Routes>
        </div>
    );
};

const Contract = () => {
    // const [ContractData, setContractData] = useState([]);
    // useEffect(() => {
    //     const abortController = new AbortController();
    //     const fetchContract = async () => {
    //         try {
    //             const response = await Fetch(
    //                 "GET",
    //                 "http://localhost:3000/api/v1/HopDong"
    //             );
    //             setContractData(response);
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     };
    //     fetchContract();

    //     return () => abortController.abort();
    // }, []);

    // console.log(ContractData);
    const { ownerID } = useParams();
    console.log(`user id: ${ownerID}`);

    const chiTietHopDong = [
        {
            maSoThue: "MST58025",
            maDoiTac: "DT582181",
            ngayKyHopDong: "14/12/2020",
            phiKichHoat: "2000000",
        },
    ];

    return (
        <div className="contract tw-mt-6">
            <div className="tw-font-bold tw-text-3xl tw-inline-block tw-mb-4">
                Hợp đồng
            </div>

            <div>user id: {ownerID}</div>
            <div>Mã số thuế: {chiTietHopDong[0].maSoThue}</div>
            <div>Mã đối tác: {chiTietHopDong[0].maDoiTac}</div>
            <div>Ngày ký hợp đồng: {chiTietHopDong[0].ngayKyHopDong}</div>
            <div>Phí kích hoạt: {chiTietHopDong[0].phiKichHoat}</div>
        </div>
    );
};

const Menu = () => {
    const columns = [
        {
            title: "Tên món",
            dataIndex: "TenMon",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Đơn giá",
            dataIndex: "DonGia",
        },
        {
            title: "Số lượng",
            dataIndex: "SoLuongDaBan",
        },
    ];

    const data = [
        {
            key: "1",
            tenmon: "Jackie Beazley",
            dongia: 35000,
            soluong: 5,
        },
        {
            key: "2",
            tenmon: "Boycie Wigan",
            dongia: 45000,
            soluong: 5,
        },
        {
            key: "3",
            tenmon: "Doyle Alvarado",
            dongia: 45000,
            soluong: 5,
        },
        {
            key: "4",
            tenmon: "Hollie Brahmer",
            dongia: 45000,
            soluong: 5,
        },
        {
            key: "5",
            tenmon: "Wat Laytham",
            dongia: 45000,
            soluong: 5,
        },
        {
            key: "6",
            tenmon: "Pizza hải sản",
            dongia: 45000,
            soluong: 5,
        },
        {
            key: "7",
            tenmon: "Jocko Messer",
            dongia: 45000,
            soluong: 5,
        },
        {
            key: "8",
            tenmon: "Burtie Ruusa",
            dongia: 45000,
            soluong: 5,
        },
        {
            key: "9",
            tenmon: "Bianka Wagen",
            dongia: 30000,
            soluong: 5,
        },
        {
            key: "10",
            tenmon: "Blondell Batters",
            dongia: 50000,
            soluong: 5,
        },
    ];

    const { ownerID } = useParams();
    console.log(`user id: ${ownerID}`);

    const [MenuData, setMenuData] = useState([]);
    useEffect(() => {
        const abortController = new AbortController();
        const fetchMenu = async () => {
            try {
                const response = await Fetch(
                    "POST",
                    "http://localhost:3000/api/v1/DoiTac/ThucDon",
                    {
                        MaDT: ownerID,
                    }
                );
                setMenuData(response);
            } catch (e) {
                console.error(e);
            }
        };
        fetchMenu();

        return () => abortController.abort();
    }, [ownerID]);

    console.log(MenuData);

    return (
        <div className="tw-px-60 tw-mt-6">
            <div className="tw-font-bold tw-text-3xl tw-inline-block tw-mb-4">
                Thực đơn
            </div>

            <TableComponent columns={columns} data={MenuData[0]} />
        </div>
    );
};

const Order = () => {
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
        <div className="tw-px-20 tw-mt-6">
            <div className="tw-font-bold tw-text-3xl tw-inline-block tw-mb-4">
                Đơn hàng
            </div>

            <TableComponent columns={columns} data={data} />
        </div>
    );
};

const Edit = () => {
    return <h1>Sửa thông tin cửa hàng</h1>;
};

export default OwnerPage;

import React, { useState, useEffect } from "react";
import "./OwnerPage.scss";
import TableComponent from "../../components/TableComponent/TableComponent";
import { Routes, Route, Link, useParams } from "react-router-dom";
import Fetch from "../../fetch";
import InputForm from "../../components/InputForm/InputForm";
import { Button, notification } from "antd";

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
    const { ownerID } = useParams();

    const [ContractData, setContractData] = useState([]);
    useEffect(() => {
        const abortController = new AbortController();
        const fetchContract = async () => {
            try {
                const response = await Fetch(
                    "GET",
                    `http://localhost:3000/api/v1/ChiTietHopDong/MaDT?MaDT=${ownerID}`
                );
                setContractData(response[0]);
            } catch (e) {
                console.error(e);
            }
        };
        fetchContract();

        return () => abortController.abort();
    }, []);

    console.log(ContractData);

    return (
        <div className="contract tw-mt-6">
            <div className="tw-font-bold tw-text-3xl tw-inline-block tw-mb-4">
                Hợp đồng
            </div>

            <div>Mã đối tác: {ContractData.MaDT}</div>
            <div>Mã hợp đồng: {ContractData.MaHD}</div>
            <div>Mã số thuế: {ContractData.MaSoThue}</div>
            <div>Ngày ký hợp đồng: {ContractData.NgayKyHopDong}</div>
            <div>Phí kích hoạt: {ContractData.PhiKichHoat}</div>
            <div>Số năm hoạt động: {ContractData.SoNamHoatDong}</div>
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
            title: "Số lượng đã bán",
            dataIndex: "SoLuongDaBan",
        },
        {
            title: "Số like",
            dataIndex: "SoLike",
        },
        {
            title: "Số dislike",
            dataIndex: "SoDislike",
        },
        {
            title: "Tình trạng món",
            dataIndex: "TinhTrangMon",
        },
    ];

    const { ownerID } = useParams();

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

    return (
        <div className="tw-px-52 tw-mt-6">
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
            title: "Mã đơn hàng",
            dataIndex: "MaDH",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Mã khách hàng",
            dataIndex: "MaKH",
        },
        {
            title: "Địa chỉ",
            dataIndex: "DiaChiDH",
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
            title: "Thời gian đặt hàng",
            dataIndex: "ThoiGianDatHang",
        },
        {
            title: "Trạng thái đơn hàng",
            dataIndex: "TrangThaiDH",
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
    const { ownerID } = useParams();

    const [OrderData, setOrderData] = useState([]);
    useEffect(() => {
        const abortController = new AbortController();
        const fetchOrder = async () => {
            try {
                const response = await Fetch(
                    "POST",
                    "http://localhost:3000/api/v1/DoiTac/XemDonHang",
                    {
                        MaDT: ownerID,
                    }
                );
                setOrderData(response);
            } catch (e) {
                console.error(e);
            }
        };
        fetchOrder();

        return () => abortController.abort();
    }, [ownerID]);
    console.log(OrderData);

    return (
        <div className="tw-px-52 tw-mt-6">
            <div className="tw-font-bold tw-text-3xl tw-inline-block tw-mb-4">
                Đơn hàng
            </div>

            <TableComponent columns={columns} data={OrderData[0]} />
        </div>
    );
};

const Edit = () => {
    const [TenQuanMoi, setTenQuanMoi] = useState("");
    console.log(TenQuanMoi);
    const { ownerID } = useParams();

    return (
        <div className="tw-px-52 tw-mt-6 tw-text-center">
            <div className="tw-font-bold tw-text-3xl tw-inline-block tw-mb-4">
                Sửa thông tin cửa hàng
            </div>

            <InputForm
                title="Nhập tên quán mới"
                placeholder="Tên quán mới"
                setInput={setTenQuanMoi}
            />
            <div className="RoleButton tw-flex tw-flex-row tw-mt-5 tw-justify-center tw-space-x-40 ">
                <div>
                    <Button
                        className="button2"
                        type="primary"
                        shape="round"
                        style={{
                            backgroundColor: "blue",
                            width: "150px",
                            height: "40px",
                        }}
                        onClick={async () => {
                            try {
                                const response = await Fetch(
                                    "PUT",
                                    "http://localhost:3000/api/v1/DoiTac",
                                    {
                                        TenQuan: TenQuanMoi,
                                        MaDT: ownerID,
                                    }
                                );
                                if (response["result"] === "successfully") {
                                    notification.success({
                                        message: "Thành công",
                                        description: `Sửa tên quán thành công`,
                                        placement: "bottomRight",
                                    });
                                    return true;
                                }
                            } catch (e) {
                                console.error(e);
                            }
                            notification.error({
                                message: "Thất bại",
                                description: `Mã đối tác không tồn tại`,
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

export default OwnerPage;

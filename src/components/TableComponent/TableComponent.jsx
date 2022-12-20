import React, { useState } from "react";
import "./TableComponent.scss";
import { Table } from "antd";

// const columns = [
//     {
//         title: "STT",
//         dataIndex: "stt",
//     },
//     {
//         title: "Mã đơn hàng",
//         dataIndex: "madonhang",
//         render: (text) => <a>{text}</a>,
//     },
//     {
//         title: "Tổng tiền",
//         dataIndex: "tongtien",
//     },
//     {
//         title: "Địa chỉ",
//         dataIndex: "diachi",
//     },
// ];
// const data = [
//     {
//         key: "1",
//         stt: 1,
//         madonhang: "MDH10001",
//         tongtien: 463032,
//         diachi: "479 Vernon Road",
//     },
//     {
//         key: "2",
//         stt: 2,
//         madonhang: "MDH10006",
//         tongtien: 1134156,
//         diachi: "850 Main Circle",
//     },
//     {
//         key: "3",
//         stt: 3,
//         madonhang: "MDH10015",
//         tongtien: 446559,
//         diachi: "17 Carpenter Hill",
//     },
//     {
//         key: "4",
//         stt: "Disabled User",
//         madonhang: 99,
//         diachi: "Sidney No. 1 Lake Park",
//     },
// ];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
        );
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === "Disabled User",
        // Column configuration not to be checked
        name: record.name,
    }),
};

const TableComponent = ({columns, data}) => {
    const [selectionType, setSelectionType] = useState("checkbox");
    return (
        <div className="TableComponent">
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};

export default TableComponent;

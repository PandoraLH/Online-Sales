import React, { useState } from "react";
import "./TableComponent.scss";
import { Table } from "antd";

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

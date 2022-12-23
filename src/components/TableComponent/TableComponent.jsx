import React, { useState } from "react";
import "./TableComponent.scss";
import { Table } from "antd";
import { Pagination } from 'antd';

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

const TableComponent = ({ columns, data }) => {
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
                pagination={<Pagination defaultCurrent={1} defaultPageSize={5} />}
            />
        </div>
    );
};

export default TableComponent;

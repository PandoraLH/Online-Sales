import React, { useState } from "react";
import "./TableComponent.scss";
import { Table } from "antd";

const TableComponent = ({ columns, data }) => {
    const [selectionType, setSelectionType] = useState("checkbox");
    return (
        <div className="TableComponent">
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10 }}
            />
        </div>
    );
};

export default TableComponent;

import React from "react";
import { CTable } from "@coreui/react";
const Table = (props) => {
  const { columns, items, tableName } = props;
  return (
    <CTable
      bordered
      columns={columns}
      items={items}
      tableHeadProps={{ color: "dark" }}
      hover
      align="middle"
    />
  );
};

export default Table;

import { CTable } from "@coreui/react";
const Table = (props) => {
  // eslint-disable-next-line react/prop-types
  const { columns, items } = props;
  return (
    <CTable
      bordered
      columns={columns}
      items={items}
      tableHeadProps={{ color: "dark" }}
      align="middle"
    />
  );
};

export default Table;

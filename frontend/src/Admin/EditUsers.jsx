import { useState } from "react";
import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditUsers = () => {
  const [data, setData] = useState();
  const column = [
    {
      key: "id",
      label: "S.No",
      _props: { scope: "col" },
    },
    {
      key: "name",
      label: "Username",
      _props: { scope: "col" },
    },
    {
      key: "age",
      label: "Age",
      _props: { scope: "col" },
    },
    {
      key: "email",
      label: "Email id",
      _props: { scope: "col" },
    },
    {
      key: "edit",
      label: "Edit",
      _props: { scope: "col" },
    },
    {
      key: "delete",
      label: "Delete",
      _props: { scope: "col" },
    },
  ];
  const options = { method: "GET" };
  const getData = async () => {
    const response = await fetch("http://localhost:3000/admin/users", options)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        return jsonData.data;
      });

    const structuredData = response.map((user) => {
      return {
        id: 1,
        name: user.name,
        age: user.age,
        email: user.email,
        delete: <button className="btn btn-danger">Delete</button>,
        edit: <button className="btn btn-warning">Edit</button>,
      };
    });
    setData(structuredData);
  };

  getData();

  return (
    <div className="container m-0 p-0">
      <h1 className="font-bold text-4xl mb-3">
        Edit from List of available Users
      </h1>
      <hr />
      <div className=" flex flex-row m-2 mx-0 justify-between">
        <input
          type="search"
          className="searchbar"
          placeholder="Enter Topic Name"
        />
        <button className="btn btn-warning mx-1">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
        <button className="btn btn-success mx-1 ">
          <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
        </button>
      </div>
      <Table columns={column} items={data} />
    </div>
  );
};

export default EditUsers;

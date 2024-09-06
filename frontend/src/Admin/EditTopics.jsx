import React from 'react'

import Table from "./Table"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const EditTopics = () => {
  const column = [
    {
      key: "id",
      label: "S.No",
      _props: { scope: "col" },
    },
    {
      key: "name",
      label: "Topic Name",
      _props: { scope: "col" },
    },
    {
      key: "courseName",
      label: "Course Name",
      _props: { scope: "col" },
    },
    {
      key: "createdate",
      label: "Date Added",
      _props: { scope: "col" },
    },
    {
      key: "delete",
      label: "Delete",
      _props: { scope: "col" },
    }
  ];
  const item = [
    {
      id: 1,
      name: "Tags",
      courseName: "HTML",
      createdate: "10/10/2024",
      delete: <button className="btn btn-danger">Delete</button> ,
      // _props: { active: true },
      // _cellProps: { id: { scope: "row" } },
    },{
      id: 2,
      name: "Selectors",
      courseName: "CSS",
      createdate: "10/10/2024",
      delete: <button className="btn btn-danger">Delete</button> ,
      // _props: { active: true },
      // _cellProps: { id: { scope: "row" } },
    },{
      id: 3,
      name: "Variables",
      courseName: "JavaScript",
      createdate: "10/10/2024",
      delete: <button className="btn btn-danger">Delete</button> ,
      // _props: { active: true },
      // _cellProps: { id: { scope: "row" } },
    },{
      id: 4,
      courseName: "ReactJS",
      name: "Components",
      createdate: "10/10/2024",
      delete: <button className="btn btn-danger">Delete</button> ,
      // _props: { active: true },
      // _cellProps: { id: { scope: "row" } },
    },    
    
  ];


  return (
    <div className="container m-0 p-0">
       <h1 className="font-bold text-4xl mb-3">Edit from List of available Topics</h1>
       <hr/>
      <div className=" flex flex-row m-2 mx-0 justify-between">
        <input type="search" className="searchbar" placeholder='Enter Topic Name' />
        <button className="btn btn-warning mx-1"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
        <button className="btn btn-success mx-1 "><FontAwesomeIcon icon="fa-solid fa-circle-plus" /></button>
      </div>
      <Table columns={column} items={item}/>
    </div>
  )
}

export default EditTopics
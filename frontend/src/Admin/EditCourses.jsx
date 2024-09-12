import "./styles/Layout.css";
import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const EditCourses = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      key: "id",
      label: "S.No",
      _props: { scope: "col" },
    },
    {
      key: "name",
      label: "Name             ",
      _props: { scope: "col" },
    },
    {
      key: "topics",
      label: "Number of Topics",
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
    },
  ];

  const items = [
    {
      id: 1,
      name: "HTML",
      topics: "5",
      createdate: "10/10/2024",
      delete: <button className="btn btn-danger">Delete</button>,
      // _props: { active: true },
      // _cellProps: { id: { scope: "row" } },
    },
    {
      id: 2,
      name: "CSS",
      topics: "5",
      createdate: "10/10/2024",
      delete: <button className="btn btn-danger">Delete</button>,
      // _props: { active: true },
      // _cellProps: { id: { scope: "row" } },
    },
    {
      id: 3,
      name: "JavaScript",
      topics: "5",
      createdate: "10/10/2024",
      delete: <button className="btn btn-danger">Delete</button>,
      // _props: { active: true },
      // _cellProps: { id: { scope: "row" } },
    },
    {
      id: 4,
      name: "ReactJS",
      topics: "5",
      createdate: "10/10/2024",
      delete: <button className="btn btn-danger">Delete</button>,
      // _props: { active: true },
      // _cellProps: { id: { scope: "row" } },
    },
  ];

  return (
    <div className="container m-0 p-0">
      <h1 className="font-bold text-4xl mb-3">
        Edit from List of available Courses
      </h1>
      <hr />
      <div className=" flex flex-row m-2 mx-0 justify-between">
        <input
          type="search"
          className="searchbar"
          placeholder="Enter Course Name"
        />
        <button className="btn btn-warning mx-1">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
        <button className="btn btn-success mx-1 " onClick={handleClickOpen}>
          <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          <DialogTitle>Add New Course</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
      <Table columns={columns} items={items} />
    </div>
  );
};

export default EditCourses;

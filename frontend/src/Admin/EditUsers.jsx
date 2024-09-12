import { useState } from "react";
// import Table from "./Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Axios from "axios";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

const EditUsers = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [toastOpen, settoastOpen] = useState(false);

  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    settoastOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const columns = useMemo(
    () => [
      // {
      //   accessorKey: 'name.firstName', //access nested data with dot notation
      //   header: 'First Name',
      // },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "age", //normal accessorKey
        header: "Age",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "delete",
        header: "Delete",
      },
    ],
    []
  );

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
        delete: (
          <button className="btn btn-danger">
            <FontAwesomeIcon icon="fa-solid fa-trash-can" />
          </button>
        ),
      };
    });
    setData(structuredData);
  };
  getData();

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowNumbers: true,
    rowNumberDisplayMode: "original",
    enableHiding:false,
    enableFullScreenToggle:false,
  

  });

  return (
    <div className="container m-0 p-0">
      <h1 className="font-bold text-4xl mb-3">
        Edit from List of available Users
      </h1>
      <hr />
      <div className=" flex flex-row m-2 mx-0 justify-between">
        <button className="btn btn-success mx-1" onClick={handleClickOpen}>
          Add
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
              Axios.post("http://localhost:3000/admin/users/", formJson)
                .then((response) => console.log(response))
                .catch((err) => console.log("post error", err));
              settoastOpen(true);
              handleClose();
            },
          }}
        >
          <DialogTitle>Add New User</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Username"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="age"
              name="age"
              label="Age"
              type="number"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              name="email"
              label="Email id"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add User</Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          open={toastOpen}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          autoHideDuration={2000}
          onClose={handleToastClose}
        >
          <Alert
            onClose={handleToastClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            User Created Successfully
          </Alert>
        </Snackbar>
      </div>
      <MaterialReactTable table={table}  />;
    </div>
  );
};

export default EditUsers;

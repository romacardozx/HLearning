import React from "react";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/actions/getAllUsers";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";

export default function AdmUsers() {
  const dispatch = useDispatch();

  const  allUsers  = useSelector((state) => state.getUser.getAllUsers);
  // const  user  = useSelector((state) => ({
  //   user: state.getUser.userDetail,
  // }));

console.log(allUsers)


useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'fullName',
      headerName: 'Nombre Completo',
      width: 150,
      editable: true,
    },
    {
      field: 'mail',
      headerName: 'Mail',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 80,
      align: "center",
      renderCell: (cell) =>
        cell.value && <CheckCircleRoundedIcon color="success" />,
    },
    {
      field: "toAdminAction",
      headerName: "Change Status",
      width: 150,
      align: "center",
      sortable: false,
      renderCell: (params) =>
      allUsers?._id !== params.row._id ? (
          <Button
            variant="outlined"
            // onClick={(e) => handleChangeStatus(e, params)}
          >
            ADMIN
          </Button>
        ) : null,
    },
    {
      field: "deleteAction",
      headerName: "Action",
      width: 100,
      align: "center",
      sortable: false,
      renderCell: (params) =>
      allUsers?._id !== params.row._id ? (
          <Button
            variant="outlined"
            color="error"
            // onClick={(e) => handleDelete(e, params)}
          >
            Delete
          </Button>
        ) : null,
    },
  ];


  const rows = allUsers?.map((e) => ({
    id: e._id,
    name: e.name,
    email: e.email,
    isAdmin: e.isAdmin || null,
    isDeleted: e.isDeleted || null,
  }));

    return (
        <Container sx={{ height: 420, width: 850 }}>
          <br/>
          <h4>ACA ESTAN LOS USUARIOS</h4><br/>
          {allUsers.length && (
            // <DataGrid rowHeight={60} rows={rows} columns={columns} pageSize={5} />
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
          )}
        </Container>
      );
    };
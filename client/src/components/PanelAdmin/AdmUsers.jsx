import React from "react";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../redux/actions/getAllUsers";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { deleteUser } from "../../redux/actions/deleteUser";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Box } from "@mui/system";


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


function handleDelete(id) {
    Swal.fire({
      title: "Estas seguro?",
      text: "No podras revertir esto..",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(id));
        Swal.fire({
          // title: "Borrado!",
          text: `El usuario ha sido eliminado`,
          imageUrl: "https://i.gifer.com/7efs.gif",
          imageWidth: 250,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    });
  }

 


  const columns = [
    { field: 'id', 
    headerName: 'ID',
     width: 90 },
    {
      field: 'name',
      headerName: 'Nombre Completo',
      width: 200,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'eMail',
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
      field: "status",
      headerName: "Delete User",
      width: 150,
      align: "center",
      sortable: false,
      renderCell: (params) =>
      allUsers?.id !== params.row.id ? (
          <Button
            variant="outlined"
            color="error"
            onClick={(e) => handleDelete(e, params)}
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
    isDeleted: e.status || null,
  }));

    return (
      <Box>
        <NavBar />
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
          />
          )}
        </Container>
        <br/><br/><br/><br/><br/>
        <Footer />
        </Box>
      );
    };

    
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
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


export default function AdmUsers() {
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.getUser.getAllUsers);
  const [currentId, setCurrentId] = useState(null);
  console.log(allUsers)




  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch, currentId]);


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
        setCurrentId(id)
      }
    });
  }



  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 120
    },
    {
      field: 'name',
      headerName: 'Nombre Completo',
      width: 180,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'eMail',
      type: 'number',
      width: 220,
      editable: false,
    },
    {
      field: "isAdmin",
      headerName: "Admin",
      width: 100,
      align: "center",
      renderCell: (cell) =>
        cell.value && <CheckCircleRoundedIcon color="success" />,
    },
    {
      field: "deleteAction",
      headerName: "Action",
      width: 150,
      align: "center",
      sortable: false,
      renderCell: (params) =>
      allUsers?.id !== params.row.id ? (
          <Button
            variant="outlined"
            color="error"
            onClick={(e) => handleDelete(params.row.id)}
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
    <Box>
      <NavBar />
      <Container sx={{ height: 420, width: 850 }}>
        <br />
        <Grid item align="center">
          <Typography sx={{ cursor: "pointer" }} variant="h5">
            Administrar Usuarios
          </Typography>
        </Grid><br />
        {allUsers.length && (
          <DataGrid rowHeight={60} rows={rows} columns={columns} pageSize={5} />
          // <DataGrid
          //   rows={rows}
          //   columns={columns}
          //   pageSize={5}
          //   rowsPerPageOptions={[5]}
          // />
        )}
      </Container>
      <br /><br /><br /><br /><br />
      <Footer />
    </Box>
  );
};


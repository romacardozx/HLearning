import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

export default function UserProfile() {
  return (
    <div>
      <NavBar />
      <Container maxWidth="lg">
        <Paper elevation={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              textAlign="left"
              variant="h5"
              color="text.primary"
              m={5}
            >
              <b>Information</b>
            </Typography>
            <Box display="flex" justifyContent="flex-end" width="100%" mr={15}>
              <IconButton
                color="primary"
                aria-label="edit"
                /* onClick={handleOpenProfile} */
              >
                <EditIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "90%",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 5,
                  m: 5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    background:
                      "linear-gradient(82deg, rgba(2,0,36,1) 0%, rgba(9,73,121,0.9948354341736695) 76%, rgba(0,212,255,1) 100%)",
                    p: 10,
                    borderRadius: 3,
                    gap: 2,
                  }}
                >
                  <Avatar
                    sx={{ width: 200, height: 200 }}
                    /* src={user.profilePicture}
                    alt={user.username} */
                  />
                  <Typography
                    sx={{ p: 1.5, borderRadius: 3, bgcolor: "white" }}
                    border="1px solid gray"
                    variant="body1"
                    color="text.primary"
                  >
                    <b> Name:</b> {/* {user.name} {user.lastName} */}
                  </Typography>
                  <Typography
                    sx={{ p: 1.5, borderRadius: 3, bgcolor: "white" }}
                    border="1px solid gray"
                    variant="body1"
                    color="text.primary"
                  >
                    <b> Username: </b> {/* {user.username} */}
                  </Typography>
                  <Typography
                    sx={{ p: 1.5, borderRadius: 3, bgcolor: "white" }}
                    border="1px solid gray"
                    variant="body1"
                    color="text.primary"
                  >
                    <b>Nationality:</b>
                    {/*  {user.nacionality} */}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: 450,
                  }}
                >
                  <Typography
                    sx={{ p: 1.5, borderRadius: 3 }}
                    border="1px solid gray"
                    variant="body1"
                    color="text.primary"
                  >
                    <b>Description:</b> {/* {user.description} */}
                  </Typography>

                  <Typography
                    sx={{ p: 1.5, borderRadius: 3 }}
                    border="1px solid gray"
                    variant="body1"
                    color="text.primary"
                  >
                    <b> Date of Birth:</b> {/* {user.dateOfBirth} */}
                  </Typography>
                  <Typography
                    sx={{ p: 1.5, borderRadius: 3 }}
                    border="1px solid gray"
                    variant="body1"
                    color="text.primary"
                  >
                    <b> E-Mail:</b>
                    {/*  {user.email} */}
                  </Typography>
                  <Typography
                    sx={{ p: 1.5, borderRadius: 3 }}
                    border="1px solid gray"
                    variant="body1"
                    color="text.primary"
                  >
                    <b> Phone Number:</b>
                    {/*  {user.phoneNumber} */}
                  </Typography>
                  <Typography
                    sx={{ p: 1.5, borderRadius: 3 }}
                    border="1px solid gray"
                    variant="body1"
                    color="text.primary"
                  >
                    <b> Languages Spoken:</b>{" "}
                    {/* {user.languagesSpoken?.join(", ")} */}
                  </Typography>
                  <Typography
                    sx={{ p: 1.5, borderRadius: 3 }}
                    border="1px solid gray"
                    variant="body1"
                    color="text.primary"
                  >
                    <b> Points: </b>
                    {/*  {user.points} */}
                  </Typography>
                </Box>
              </Box>
              <hr style={{ width: "90%" }} />
              <Typography variant="h5" color="text.primary">
                <b>My places</b>
              </Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                gap={5}
                mb={5}
              >
                {/* {ownerHouses?.length ? (
                  ownerHouses.map((house, idx) => (
                    <HouseCard
                      key={idx}
                      house={house}
                      handleOpen={handleOpenHouse}
                      handleClose={handleCloseHouse}
                      handleCurrentHouse={setCurrentHouse}
                    />
                  ))
                ) : (
                  <Button
                    component={Link}
                    to="/announcement"
                    variant="outlined"
                  >
                    Post your home!
                  </Button>
                )} */}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}

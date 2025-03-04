import UserForm from "../user/component";
import { Container, Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { alpha } from "@mui/system";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import UserFormContainer from "../UserListContainer/index";

const { Component } = require("react");

class Loading extends Component {
  componentDidMount() {
    this.timer = setInterval(() => console.log("Loading..........."), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <Typography variant="h6" color="primary" textAlign="center">
        {/* {alert("Loading Data ....", 500)} */}
      </Typography>
    );
  }
}

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsersRequest();

    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("the data extracted ", data);

        const mappedData = data.users
          .slice(1, 6)
          .map(({ id, firstName, lastName, email }) => ({
            id,
            firstName,
            lastName,
            email,
          }));
        console.log({ mappedData });
        this.props.fetchUsersSucces(mappedData);
      });
  }

  render() {
    if (this.props.isLoading) {
      return <Loading />;
    }

    return (
      <Container maxWidth="md">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Box
            sx={{
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
              borderRadius: "16px",
              padding: "20px",
              boxShadow: 3,
              width: "100%",
              maxWidth: "1000px",
            }}
          >
            <Button variant="contained" color="primary" startIcon={<AddIcon />}>
              Add User
            </Button>
            <Typography variant="h5" color="black" textAlign="center" mb={2}>
              User Information
            </Typography>
            <TableContainer component={Paper} sx={{ borderRadius: "12px" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>ID</b>
                    </TableCell>
                    <TableCell>
                      <b>First Name</b>
                    </TableCell>
                    <TableCell>
                      <b>Last Name</b>
                    </TableCell>
                    <TableCell>
                      <b>Email</b>
                    </TableCell>
                    <TableCell>
                      <b>Actions</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(this.props.users || []).map((user) => {
                    console.log(user);

                    return (
                      <TableRow>
                        <UserForm
                          key={user.id}
                          firstname={user.firstName}
                          lastname={user.lastName}
                          email={user.email}
                          id={user.id}
                        />
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>
    );
  }
}

export default UserList;

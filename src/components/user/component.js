import { Button, THEME_ID } from "@mui/material";
import { Box, TableCell, TextField } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { deleteUser } from "../../redux/userReducer/action";
import { connect } from "react-redux";

const { Component } = require("react");

const mapDispatchToProps = {
  deleteUser,
};

class UserForm extends Component {
  render() {
    const { id, firstname, lastname, email, deleteUser } = this.props;
    return (
      <>
        <TableCell>{id}</TableCell>
        <TableCell>
          <TextField
            variant="standard"
            InputProps={{ disableUnderline: true }}
            placeholder="Enter firstname..."
            value={firstname} // Setting the value
          />
        </TableCell>
        <TableCell>
          <TextField
            variant="standard"
            InputProps={{ disableUnderline: true }}
            placeholder="Enter firstname..."
            value={lastname} // Setting the value
          />
        </TableCell>
        <TableCell>
          <TextField
            variant="standard"
            InputProps={{ disableUnderline: true }}
            placeholder="Enter firstname..."
            value={email} // Setting the value
          />
        </TableCell>

        <TableCell>
          <Box display="flex" gap={1}>
            <Button color="secondary" startIcon={<VisibilityIcon />}>
              VIEW
            </Button>
            <Button
              variant="contained"
              color="success"
              startIcon={<EditIcon />}
            >
              EDIT
            </Button>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={() => deleteUser(id)}
            >
              DELETE
            </Button>
          </Box>
        </TableCell>
      </>
    );
  }
}
export default connect(null, mapDispatchToProps)(UserForm);

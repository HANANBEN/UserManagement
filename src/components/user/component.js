import { Button, THEME_ID } from "@mui/material";
import { Box, TableCell } from "@mui/material";

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
    return (
      <>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>{this.props.firstname}</TableCell>
        <TableCell>{this.props.lastname}</TableCell>
        <TableCell>{this.props.email}</TableCell>

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
              onClick={() => this.props.deleteUser(this.props.id)}
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

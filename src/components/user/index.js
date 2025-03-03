

import { Component } from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../redux/userReducer/action";




const mapDispatchToProps = {
    deleteUser,
}



class UserFormContainer extends Component{
 



    render(){
        return <UserForm {...this.props} deleteUser={this.props.deleteUser} />
    }


}
export default connect(null ,mapDispatchToProps)(UserFormContainer);

import { Component } from "react";
import UserList from "./component";
import { connect } from "react-redux";
import { addUser, fetchUsersRequest ,fetchUsersSucces } from "../../redux/userReducer/action";




const mapDisparchToProps = {
    addUser, 
    fetchUsersRequest,
    fetchUsersSucces

}
const mapStateToProps = (store) =>(
    {
        users: store.users.users,
        isLoading:store.users.isLoading
    }  
)

class UserListContainer extends Component{
    render(){
        return <UserList {...this.props} />
 
    }
}
export default connect(mapStateToProps , mapDisparchToProps)(UserListContainer);


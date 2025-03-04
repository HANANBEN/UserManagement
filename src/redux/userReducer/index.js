import {
  ADD_USER,
  DELETE_USER,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./action";
const initialState = {
  users: [],
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: payload.users,
        isLoading: false,
      };
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== payload.id),
      };

    case ADD_USER:
      const lastId =
        state.users.length > 0 ? state.users[state.users.length - 1].id : 0;
      console.log("Last element ID:", lastId);
      let newUserId = lastId + 1;

      return {
        ...state,
        users: [...state.users, { ...payload, id: newUserId }],
      };

    default:
      return state;
  }
};

export default userReducer;

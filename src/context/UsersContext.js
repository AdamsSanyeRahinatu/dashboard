import axios from "axios";
import { createContext, useReducer } from "react";
import userReducer from "../reducers/usersReducer";

const initialState = {
  loading: true,
  user: {},
  error: null,
};

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // login a user
  async function loginUser(user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      "https://traineesapi-dodoo.herokuapp.com/api/v1/users/login",
      user,
      config
    );
    localStorage.setItem("user", res.data);
    dispatch({
      type: "LOGIN_USER",
      payload: res.data,
    });
    console.log(res.data);
  };

  // register user
  async function registerUser(newuser) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://traineesapi-dodoo.herokuapp.com/api/v1/users/register",
        newuser,
        config
      );
      dispatch({
        type: "REGISTER_USER",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    };
  };

  const logout = async () => {
    await localStorage.removeItem("userInfo")
    dispatch({
      type: "LOGOUT"
    })
  }

  return (
    <UserContext.Provider
      value={{
        loginUser,
        user: state.user,
        loading: state.loading,
        registerUser,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
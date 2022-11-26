import { createSlice } from "@reduxjs/toolkit";
import { Navigate, useNavigate } from "react-router-dom";
import { ACCESSTOKEN, http, settings, USER_LOGIN } from "../../util/config";

const initialState = {
  //nếu localstorage có dữ liệu -> load dữ liệu default cho state.userLogin của redux, nếu localstorage không có thì gán object {}
  userLogin: settings.getStorageJson(USER_LOGIN)
    ? settings.getStorageJson(USER_LOGIN)
    : {},
  userProfile: {},
  user: {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      //B1: Lấy dữ liệu payload
      const userLogin = action.payload;
      //B2: Cập nhật lại state
      state.userLogin = userLogin;
    },
    getProfileAction: (state, action) => {
      state.userProfile = action.payload;
    },
    registerAction: (state, action) => {
      //B1: Lấy dữ liệu payload
      const user = action.payload;
      //B2: Cập nhật lại state
      state.user = user;
    },
  },
});

export const { loginAction, getProfileAction, registerAction } =
  userReducer.actions;

export default userReducer.reducer;

//-------------- async action ----------

/**
 *
 * @param {*} userLogin userLogin : {email:'', password:''}
 * @returns trả về action loại 2 action = (dispatch) => {}
 */
export const loginApi = (userLogin) => {
  return async (dispatch) => {
    const result = await http.post("/api/users/signin", userLogin);
    //sau khi lấy dữ liệu tạo ra actionCreator = {type:,payload}
    console.log(result);
    const action = loginAction(result.data.content);
    console.log(result);

    dispatch(action);
    //Lưu vào localstorage và cookie
    settings.setStorageJson(USER_LOGIN, result.data.content);

    settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);

    settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
  };
};
// const navigate = useNavigate();
export const registerApi = (user) => {
  return async (dispatch) => {
    const result = await http.post("/api/users/signup", user);
    //sau khi lấy dữ liệu tạo ra actionCreator = {type:,payload}
    console.log(result);
    const action = registerAction(result.data.content);
    console.log(result);

    dispatch(action);
    //Lưu vào localstorage và cookie
    settings.setStorageJson(USER_LOGIN, result.data.content);

    settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);

    settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
  };
};

export const getProfileApi = () => {
  return async (dispatch) => {
    const result = await http.post("/api/users/getprofile");
    const action = getProfileAction(result.data.content);
    dispatch(action);
  };
};
export const loginFacebookApi = (tokenFBApp) => {
  return async (dispatch) => {
    const result = await http.post("/api/Users/facebooklogin", {
      facebookToken: tokenFBApp,
    });
    const action = loginAction(result.data.content);
    dispatch(action);
    //Lưu vào localstorage và cookie
    settings.setStorageJson(USER_LOGIN, result.data.content);

    settings.setStorage(ACCESSTOKEN, result.data.content.accessToken);

    settings.setCookie(ACCESSTOKEN, result.data.content.accessToken, 30);
  };
};

// export const getProfileApi = (navigate) => {
//   return async dispatch => {
//     try {
//       const result = await http.post('/api/users/getprofile');
//       const action = getProfileAction(result.data.content);
//       dispatch(action);
//     } catch (err) {
//       if(err?.response?.status === 401) {
//         alert('Đăng nhập để vào trang này !');
//         navigate('/login');
//       }
//     }
//   }
// }

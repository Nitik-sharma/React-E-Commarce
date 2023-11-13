// import { createSlice } from "@reduxjs/toolkit";

// const validateUser = (username, password) => {
//   const userValidation = /^[A-Za-z]{4,10}$/i.test(username);
//   const passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
//     password
//   );

//   return userValidation && passwordValidation;
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: JSON.parse(localStorage.getItem("authUser")) || {
//       name: "",
//       password: "",
//       image: "",
//       authUser: false,
//     },
//   },
//   reducers: {
//     login(state, action) {
//       const userId = action.payload;
//       const isValidUser = validateUser(userId.name, userId.password);

//       state.user = userId;

//       if (!isValidUser) {
//         state.user.authUser = false;
//       } else {
//         state.user.authUser = true;
//         const saveState = JSON.stringify(userId);
//         localStorage.setItem("authUser", saveState);
//       }
//     },
//     logut(state) {
//       state.user = {
//         name: "",
//         password: "",
//         image: "",
//         authUser: false,
//       };
//       localStorage.clear();
//     },
//   },
// });

// export const { login, logut } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import userData from "../../data.json"
const initialState = {
    userInfo: {}, // for user object
    userToken: null,
    isLoggedIn: false, // for monitoring the registration process.
  }
  const { Roles } = userData;
  console.log('Roles', Roles[0].role);
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            let user = {
                id: action.payload.id,
                email: action.payload.email,
                role: Roles[0].role,
            }
            state.userInfo = user;
            state.isLoggedIn = true;
            state.userToken = action.payload.token; 
        },
        logout(state, action) {
            
            state.isLoggedIn = false;  
        }
    }
});

export { authSlice }
export const selectUserRole = (state) => state.auth.userInfo.role;

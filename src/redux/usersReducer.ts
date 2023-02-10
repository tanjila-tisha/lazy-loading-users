import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserType, UsersState } from "../types";


const initialState: UsersState = {
  loading: false,
  users: [],
  error: "",
};

export const loadUsers = createAsyncThunk("users/load", async () => {
  const response = await (await fetch("https://reqres.in/api/users?page=1")).json();

  //return { total : 10, u};
  return response.data;
});

const usersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUsers.pending, (state) => {
      state.loading = true;
    })
    .addCase(loadUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(loadUsers.rejected, (state) => {
      state.loading = false;
      state.error =
        "Error, something went wrong. Contact support if problem persis";
    })
});

// Selectors
export const getUsers = (state: RootState): Array<UserType> => state.users.users;

export default usersReducer;

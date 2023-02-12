import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User, UsersState } from "../types";

const initialState: UsersState = {
  loading: false,
  users: [],
  error: "",
  page: 1,
  total: 0,
};

export const loadUsers = createAsyncThunk(
  "users/load",
  async (page: number = 1) => {
    const response = await (
      await fetch(`https://reqres.in/api/users?page=${page}`)
    ).json();

    return { total: response.total, users: response.data, page: response.page };
  }
);

const usersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUsers.pending, (state) => {
      state.loading = true;
    })
    .addCase(loadUsers.fulfilled, (state, action) => {
      const { users, total, page } = action.payload;
      if (page > 1) {
        state.users = state.users.concat(users);
      } else {
        state.users = users;
      }
      state.loading = false;
      state.total = total;
      state.page = page;
    })
    .addCase(loadUsers.rejected, (state) => {
      state.loading = false;
      state.error =
        "Error, something went wrong. Contact support if problem persis";
    });
});

// Selectors
export const getUsers = (state: RootState): Array<User> => state.users.users;
export const getPage = (state: RootState): number => state.users.page;
export const getTotal = (state: RootState): number => state.users.total;
export const getLoader = (state: RootState): boolean => state.users.loading;

export default usersReducer;

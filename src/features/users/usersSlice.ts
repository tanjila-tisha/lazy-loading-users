import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
//import type { RootState } from "../../store";

interface UsersState {}

const initialState: UsersState = {};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // non async calls
  },
});

export const {} = usersSlice.actions;

// Selectors
//export const getUsers = (state: RootState): string => state.users.list;

export default usersSlice.reducer;

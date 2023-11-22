import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootApi } from "../../RootApi";
import { UserDataMainModel } from "../models/userModel";

export const getAllUsers = createAsyncThunk<UserDataMainModel[]>(
  "user/get",
  async () => {
    const response = await RootApi.get(`/users`);
    // console.log("response-users=>", response);
    if (response.status === 200) {
      return response.data.reverse();
    }
  }
);

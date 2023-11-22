import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserDataMainModel } from "../models/userModel";
import { getAllUsers } from "../actions/userAction";

export interface ShowUsers {
  allUsers: UserDataMainModel[];
  singleUser: UserDataMainModel;
  isLoading: boolean;
  message: string;
}

const initialState: ShowUsers = {
  allUsers: [],
  singleUser: {} as UserDataMainModel,
  isLoading: true,
  message: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,

  // normal reducers
  reducers: {
    viewUser: (state, action: PayloadAction<UserDataMainModel>) => {
      console.log("viewUser=>", action);

      state.singleUser = action.payload;
    },
  },

  extraReducers: function (builder) {
    //Fetch All Employees
    builder.addCase(getAllUsers.pending, (state) => {
      state.isLoading = true;
      state.message = "";
    });

    builder.addCase(
      getAllUsers.fulfilled,
      (state, action: PayloadAction<UserDataMainModel[]>) => {
        state.isLoading = false;
        state.allUsers = action.payload;
        state.message = "";
      }
    );

    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.allUsers = [];
      state.message = "Something Went Wrong!";
    });
  },
});

export const { viewUser } = userSlice.actions;

export default userSlice.reducer;

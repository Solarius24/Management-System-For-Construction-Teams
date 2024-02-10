import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  id: String;
  listOfTabs: {
    _id: string;
    tabName: string;
    listOfWidgets: string[];
  }[];
}

const initialState: UserState = {
  id: "def",
  listOfTabs: [
    {
      _id: "def01",
      tabName: "Default",
      listOfWidgets: ["Organizations With Most Tasks"],
    },
  ],
};

export const fetchUserData = createAsyncThunk("fetchUserData", async () => {
  const response = await axios("/api/userData", { params: { id: "001" } });
  return response.data;
});

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      axios.patch("/api/userData", action.payload, {
        params: { id: "001" },
      });
      state.listOfTabs.push(action.payload);
    },

    addWidget: (state, action) => {
      axios.patch("/api/userData/001", action.payload);

      const index = state.listOfTabs.findIndex(
        (item) => item._id === action.payload.tabId
      );
      console.log(index, action.payload.widgetName);
      state.listOfTabs[index].listOfWidgets.push(action.payload.widgetName);
    },

    updateUserData: (state, action) => {},
    updateUserTabName: (state, action) => {
      axios.patch("/api/userDataTabName", action.payload, {
        params: { id: "001" },
      });
      const index = state.listOfTabs.findIndex(
        (item) => item._id === action.payload.tabId
      );
      state.listOfTabs[index] = {
        ...state.listOfTabs[index],
        ...action.payload,
      };
    },
    deleteUserTab: (state, action) => {
      axios.delete("/api/userData/001", { data: action.payload });
      state.listOfTabs = state.listOfTabs.filter(
        (item) => item._id !== action.payload.tabId
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.listOfTabs = action.payload.listOfTabs;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  addUserData,
  updateUserData,
  deleteUserTab,
  updateUserTabName,
  addWidget,
} = userSlice.actions;

export default userSlice.reducer;

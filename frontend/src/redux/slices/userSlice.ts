import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  id: String;
  listOfTabs: {
    id: string;
    tabName: string;
    listOfWidgets: string[];
  }[];
}

const initialState: UserState = {
  id: "def",
  listOfTabs: [
    {
      id: "def01",
      tabName: "Default",
      listOfWidgets: ["Organizations With Most Tasks"],
    },
  ],
};

// {
//   body: JSON.stringify({ id: "001" }),
// }
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
    updateUserData: (state, action) => {
      //   axios.patch(`/api/form_schedule/${action.payload.id}`, action.payload);
      //   const index = state.data.findIndex(
      //     (item) => item.id === action.payload.id
      //   );
      //   state.data[index] = { ...state.data[index], ...action.payload };
    },
    updateUserTabName: (state, action) => {
      console.log(action.payload);
      axios.patch("/api/userDataTabName", action.payload, {
        params: { id: "001" },
      });
      const index = state.listOfTabs.findIndex(
        (item) => item.id === action.payload.tabId
      );
      state.listOfTabs[index] = {
        ...state.listOfTabs[index],
        ...action.payload,
      };
    },
    deleteUserData: (state, action) => {
      //   axios.delete("/api/forms_schedule", { data: action.payload });
      //   state.data = state.data.filter(
      //     (item) => action.payload.includes(item.id) === false
      //   );
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
  deleteUserData,
  updateUserTabName,
} = userSlice.actions;

export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// axios.defaults.baseURL = "https://msfct-api.onrender.com";

interface Process {
  data: {
    _id: string;
    title: string;
    columns: string[];
    updatedAt: String;
    location: { locationName: string; locationStatus: object; id: string }[];
  }[];
}

const initialState: Process = {
  data: [
    {
      _id: "100100",
      title: "waterproofing",
      columns: [],
      updatedAt: "2022-02-26T17:08:14",
      location: [],
    },
    {
      _id: "100101",
      title: "concrete",
      columns: [],
      updatedAt: "2022-02-26T17:08:14",
      location: [],
    },
  ],
};

export const fetchProcesses = createAsyncThunk("fetchProcess", async () => {
  const response = await axios("/api/processes");
  return response.data;
});

export const processSlice = createSlice({
  name: "processes",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      axios.patch("/api/addLocation/", action.payload[0], {
        params: { id: `${action.payload[1]}` },
      });
      const index = state.data.findIndex(
        (item) => item._id === action.payload[1]
      );

      state.data[index].location.push(action.payload[0]);
    },
    updateLocationStatus: (state, action) => {
      axios.patch("/api/updateLocationStatus/", action.payload[0], {
        params: { id: `${action.payload[1]}` },
      });

      const index = state.data.findIndex(
        (item) => item._id === action.payload[1]
      );

      state.data[index].location = action.payload[0];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProcesses.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { addLocation, updateLocationStatus } = processSlice.actions;

export default processSlice.reducer;

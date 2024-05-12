import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Process {
  data: {
    _id: string;
    title: string;
    columns: string[];
    location: { locationName: string; locationStatus: object; id: string }[];
  }[];
}

const initialState: Process = {
  data: [
    { _id: "sfsdf", title: "sdfsdf", columns: [], location: [] },
    { _id: "sfsdf", title: "sdfsdf", columns: [], location: [] },
  ],
};

export const fetchProcesses = createAsyncThunk("fetchProcess", async () => {
  const response = await axios("https://msfct-api.onrender.com/api/processes");
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
      console.log(action.payload);
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
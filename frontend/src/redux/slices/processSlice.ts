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
  const response = await axios("/api/processes");
  return response.data;
});

export const processSlice = createSlice({
  name: "processes",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      axios.patch("/api/addLocation/", action.payload, {
        params: { id: `${action.payload.id}` },
      });

      // axios.patch(`/api/addLocation/${action.payload.id}`, action.payload);
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProcesses.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { addLocation } = processSlice.actions;

export default processSlice.reducer;

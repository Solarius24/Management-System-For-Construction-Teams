import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Process {
  data: {
    _id: string;
    title: string;
    columns: string[];
  }[];
}

const initialState: Process = {
  data: [
    { _id: "sfsdf", title: "sdfsdf", columns: [] },
    { _id: "sfsdf", title: "sdfsdf", columns: [] },
  ],
};

export const fetchProcesses = createAsyncThunk("fetchProcess", async () => {
  const response = await axios("/api/processes");
  return response.data;
});

export const processSlice = createSlice({
  name: "processes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProcesses.fulfilled, (state, action) => {
      console.log(action.payload);
      state.data = action.payload;
    });
  },
});

export default processSlice.reducer;

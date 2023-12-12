import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface TaskState {
  data: {
    id: string;
    cause: string;
    cousedBy: string;
    description: string;
    issuedByUser: string;
    issuedToOrganisation: string;
    location: string;
    package: string;
    status: string;
    statusChangeComments: string;
    targetDate: string;
    taskType: string;
  }[];
}

const initialState: TaskState = {
  data: [
    {
      id: `temp01`,
      cause: "",
      cousedBy: "",
      description: "",
      issuedByUser: "",
      issuedToOrganisation: "",
      location: "",
      package: "",
      status: "OPEN",
      statusChangeComments: "",
      targetDate: "",
      taskType: "",
    },
  ],
};

export const fetchForms = createAsyncThunk("fetchForm", async () => {
  const response = await fetch("http://localhost:9000/tasks");
  const data = await response.json();
  return data;
});

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      axios.post("http://localhost:9000/tasks", action.payload);
      state.data.push(action.payload);
    },
    updateTask: (state, action) => {
      axios.patch(
        `http://localhost:9000/tasks/${action.payload.id}`,
        action.payload
      );
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[index] = { ...state.data[index], ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchForms.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { updateTask,addTask } = taskSlice.actions;

export default taskSlice.reducer;

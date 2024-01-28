import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface TaskState {
  data: {
    id: string;
    taskRef: string;
    cause: string;
    causedBy: string;
    description: string;
    issuedByUser: string;
    issuedToOrganisation: string;
    location: string;
    contractPackage: string;
    taskStatus: string;
    statusChangeComments: string;
    targetDate: string;
    taskType: string;
  }[];
}

const initialState: TaskState = {
  data: [
    {
      id: "temp01",
      taskRef: "temp01",
      cause: "",
      causedBy: "",
      description: "",
      issuedByUser: "",
      issuedToOrganisation: "",
      location: "",
      contractPackage: "",
      taskStatus: "OPEN",
      statusChangeComments: "",
      targetDate: "",
      taskType: "",
    },
  ],
};

export const fetchTasks = createAsyncThunk("fetchForm", async () => {
  const response = await fetch("/api/tasks");
  const data = await response.json();
  return data;
});

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      axios.post("/api/tasks", action.payload);
      state.data.push(action.payload);
    },
    updateTask: (state, action) => {
      axios.patch(`/api/tasks/${action.payload.id}`, action.payload);
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[index] = { ...state.data[index], ...action.payload };
    },
    deleteTask: (state, action) => {
      axios.delete("/api/tasks", { data: action.payload });

      state.data = state.data.filter(
        (item) => action.payload.includes(item.id) === false
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { updateTask, addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;

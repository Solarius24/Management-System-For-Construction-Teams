import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// axios.defaults.baseURL = "https://msfct-api.onrender.com";

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
    createdAt: string;
  }[];
}

const initialState: TaskState = {
  data: [
    {
      id: "00001",
      taskRef: "temp01",
      cause: "",
      causedBy: "",
      description: "",
      issuedByUser: "Mick Jackson",
      issuedToOrganisation: "sub-contractor",
      location: "ground floor",
      contractPackage: "",
      taskStatus: "OPEN",
      statusChangeComments: "",
      targetDate: "12/12/2024",
      taskType: "",
      createdAt: "",
    },
  ],
};

export const fetchTasks = createAsyncThunk("fetchTask", async () => {
  const response = await axios(`/api/tasks`);
  return response.data;
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

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface FormScheduleState {
  loading: boolean;
  error: string | null;
  data: {
    id: string;
    type: string | null;
    template: string | null;
    description: string;
    location: string | null;
    issuedByOrganisation: string | null;
    startDate: string;
    repeat: string | null;
    issuedBy: string | null;
  }[];
}

const initialState: FormScheduleState = {
  loading: true,
  error: null,
  data: [
    {
      id: `temp01`,
      type: "templated",
      template: " ",
      description: `${Date.now()}`,
      location: "OPEN",
      issuedByOrganisation: "",
      startDate: " ",
      repeat: "",
      issuedBy: "",
    },
  ],
};

export const fetchFormsSchedule = createAsyncThunk(
  "fetchFormSchedule",
  async () => {
    const response = await fetch("/api/forms_schedule");
    const data = await response.json();
    return data;
  }
);

export const formScheduleSlice = createSlice({
  name: "formSchedule",
  initialState,
  reducers: {
    addFormSchedule: (state, action) => {
      axios.post("/api/forms_schedule", action.payload);
      state.data.push(action.payload);
    },
    updateFormSchedule: (state, action) => {
      axios.patch(`/api/form_schedule/${action.payload.id}`, action.payload);
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[index] = { ...state.data[index], ...action.payload };
    },
    deleteFormSchedule: (state, action) => {
      axios.delete("/api/forms_schedule", { data: action.payload });

      state.data = state.data.filter(
        (item) => action.payload.includes(item.id) === false
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFormsSchedule.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addFormSchedule, updateFormSchedule, deleteFormSchedule } =
  formScheduleSlice.actions;

export default formScheduleSlice.reducer;

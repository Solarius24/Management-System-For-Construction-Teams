import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface FormState {
  loading: boolean;
  error: string | null;
  data: {
    id: string;
    formTitle: string | null;
    documentRef: string | null;
    createdDate: string;
    status: string | null;
    formType: string;
    details: string | null;
    location: string | null;
    expiryDate: string | null;
    signatureDate: string | null;
    signature: string | null;
  }[];
}

const initialState: FormState = {
  loading: true,
  error: null,
  data: [
    {
      id: `temp01`,
      formTitle: "templated",
      documentRef: " ",
      createdDate: `${Date.now()}`,
      status: "OPEN",
      formType: "",
      details: " ",
      location: "   ",
      expiryDate: " ",
      signatureDate: "",
      signature: "",
    },
  ],
};

export const fetchForms = createAsyncThunk("fetchForm", async () => {
  const response = await fetch("http://localhost:9000/forms");
  const data = await response.json();
  return data;
});

// export const addForm = createAsyncThunk("addForm", async (data: {}) => {
//   axios.post("http://localhost:9000/forms", data);
//   return data;
// });

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addForm: (state, action) => {
      axios.post("http://localhost:9000/forms", action.payload);
      state.data.push(action.payload);
    },
    updateForm: (state, action) => {
      axios.patch(
        `http://localhost:9000/forms/${action.payload.id}`,
        action.payload
      );
      const index = state.data.findIndex(item => item.id === action.payload.id)
      state.data[index] = {...state.data[index],...action.payload}
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchForms.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addForm,updateForm } = formSlice.actions;

export default formSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// axios.defaults.baseURL = "https://msfct-api.onrender.com";

interface FormState {
  loading: boolean;
  error: string | null;
  data: {
    id: string;
    formTitle: string | null;
    documentRef: string;
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
      id: `00001`,
      formTitle: "templated",
      documentRef: " ",
      createdDate: "12/01/1900",
      status: "OPEN",
      formType: "",
      details: " ",
      location: "ground floor",
      expiryDate: " 12/12/2024",
      signatureDate: "",
      signature: "",
    },
  ],
};

export const fetchForms = createAsyncThunk("fetchForm", async () => {
  const response = await axios("/api/forms");
  // const data = await response.json();
  return response.data;
});

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addForm: (state, action) => {
      axios.post("/api/forms", action.payload);
      state.data.push(action.payload);
    },
    updateForm: (state, action) => {
      axios.patch(`/api/forms/${action.payload.id}`, action.payload);
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[index] = { ...state.data[index], ...action.payload };
    },
    deleteForm: (state, action) => {
      axios
        .delete("/api/forms", { data: action.payload })
        .then((response) => {});

      state.data = state.data.filter(
        (item) => action.payload.includes(item.id) === false
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchForms.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addForm, updateForm, deleteForm } = formSlice.actions;

export default formSlice.reducer;

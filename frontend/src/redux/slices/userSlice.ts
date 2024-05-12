import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  id: String;
  listOfTabs: {
    _id: string;
    tabName: string;
    listOfWidgets: { _id: string; widgetName: string; widgetType: string }[];
  }[];
  listOfColumnsToDisplay: {
    form: string[];

    task: string[];
  };
}

const initialState: UserState = {
  id: "def",
  listOfTabs: [
    {
      _id: "def01",
      tabName: "Default",
      listOfWidgets: [
        {
          _id: "def21",
          widgetName: "Form Detail Status",
          widgetType: "Pie Chart With Custom Labels",
        },
      ],
    },
  ],
  listOfColumnsToDisplay: {
    form: [
      "01Ref",
      "02Title",
      "03Status",
      "04Location",
      "05Created date",
      "06Type",
      "07By User",
      "08By Organisation",
      "09Status Changed",
      "10Expiry Date",
      "11Actions",
    ],

    task: [
      "01Ref",
      "02Description",
      "03Task Type",
      "04Location",
      "05Status",
      "06Package",
      "07Target Date",
      "08By Organisation",
      "09By User",
      "10Cause",
      "11Cause By",
    ],
  },
};

export const fetchUserData = createAsyncThunk("fetchUserData", async () => {
  const response = await axios("https://msfct-api.onrender.com/api/userData", { params: { id: "001" } });
  return response.data;
});

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUserData: (state, action) => {
      axios.patch("/api/userData", action.payload, {
        params: { id: "001" },
      });
      state.listOfTabs.push(action.payload);
    },
    addFormColumnToListOfColumnToDisplay: (state, action) => {
      axios.patch("/api/updateFormListOfColumns", action.payload, {
        params: { id: "001" },
      });
      state.listOfColumnsToDisplay.form = action.payload.sort();
    },
    addTaskColumnToListOfColumnToDisplay: (state, action) => {
      axios.patch("/api/updateTaskListOfColumns", action.payload, {
        params: { id: "001" },
      });
      state.listOfColumnsToDisplay.task = action.payload.sort();
    },

    addWidget: (state, action) => {
      axios.patch("/api/userData/001", action.payload);

      const index = state.listOfTabs.findIndex(
        (item) => item._id === action.payload.tabId
      );
      state.listOfTabs[index].listOfWidgets.push({
        widgetType: action.payload.widgetType,
        widgetName: action.payload.widgetName,
        _id: "",
      });
    },

    deleteWidget: (state, action) => {
      axios.delete("/api/userDataWidget/001", { data: action.payload });

      const index = state.listOfTabs.findIndex(
        (item) => item._id === action.payload.tabId
      );

      state.listOfTabs[index].listOfWidgets = state.listOfTabs[
        index
      ].listOfWidgets.filter((item) => item._id !== action.payload.widgetId);
    },

    updateUserData: (state, action) => {},
    updateUserTabName: (state, action) => {
      axios.patch("/api/userDataTabName", action.payload, {
        params: { id: "001" },
      });
      const index = state.listOfTabs.findIndex(
        (item) => item._id === action.payload.tabId
      );
      state.listOfTabs[index] = {
        ...state.listOfTabs[index],
        ...action.payload,
      };
    },
    deleteUserTab: (state, action) => {
      axios.delete("/api/userData/001", { data: action.payload });
      state.listOfTabs = state.listOfTabs.filter(
        (item) => item._id !== action.payload.tabId
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.listOfTabs = action.payload.listOfTabs;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  addFormColumnToListOfColumnToDisplay,
  addTaskColumnToListOfColumnToDisplay,
  addUserData,
  updateUserData,
  deleteUserTab,
  updateUserTabName,
  addWidget,
  deleteWidget,
} = userSlice.actions;

export default userSlice.reducer;

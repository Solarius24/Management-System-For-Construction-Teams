import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// axios.defaults.baseURL = "https://msfct-api.onrender.com";

interface AssetState {
  data: {
    _id: string;
    title: string;
    organizationName: string;
    listOfItems: {
      itemName: string;
      itemQuantity: string;
      itemDescription: string;
      itemLocation: string;
      itemId: string;
    }[];
  }[];
}

const initialState: AssetState = {
  data: [
    {
      _id: "000000001",
      title: "demo",
      organizationName: "Sub-contractor",
      listOfItems: [
        {
          itemName: "demo",
          itemQuantity: "20",
          itemDescription: "demo",
          itemLocation: "demo",
          itemId: "1000010000",
        },
      ],
    },
  ],
};

export const fetchAssets = createAsyncThunk("fetchAssets", async () => {
  const response = await axios("/api/assets");
  return response.data;
});

export const assetSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    addAsset: (state, action) => {
      //   axios.patch("/api/addAsset/", action.payload[0], {
      //     params: { id: `${action.payload[1]}` },
      //   });
      //   const index = state.data.findIndex(
      //     (item) => item._id === action.payload[1]
      //   );
      //   state.data[index].location.push(action.payload[0]);
    },
    updateAsset: (state, action) => {
      //   console.log(action.payload);
      //   axios.patch("/api/updateLocationStatus/", action.payload[0], {
      //     params: { id: `${action.payload[1]}` },
      //   });
      //   const index = state.data.findIndex(
      //     (item) => item._id === action.payload[1]
      //   );
      //   state.data[index].location = action.payload[0];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAssets.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { addAsset, updateAsset } = assetSlice.actions;

export default assetSlice.reducer;

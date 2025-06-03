import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContents = createAsyncThunk(
  "content/fetchContents",
  async () => {
    const res = await axios.get(
      "https://closet-recruiting-api.azurewebsites.net/api/data"
    );
    return res.data;
  }
);

const contentSlice = createSlice({
  name: "content",
  initialState: {
    allData: [],
    filters: [],
    keyword: "",
    visibleCount: 20,
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    increaseVisibleCount: (state) => {
      state.visibleCount += 20;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContents.fulfilled, (state, action) => {
      state.allData = action.payload;
    });
  },
});

export const { setFilters, setKeyword, increaseVisibleCount } =
  contentSlice.actions;
export default contentSlice.reducer;

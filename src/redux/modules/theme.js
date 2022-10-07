import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/Api";

const initialState = {
  list : [],
  isLoading: false,
  error: null
}

export const __getTheme = createAsyncThunk(
  "post/__getTheme",
  async (payload, thunkAPI) => {
    // console.log(payload);
    try {
      const data = await instance.get(`/api/place?theme=${payload.themeCode}&areaCode=${payload.areaCode}&sigunguCode=${payload.sigunguCode}&pageNum=1`);
      // const data = await instance.get(`/api/place?theme=12&areaCode=39&sigunguCode=4&pageNum=1`);
      // console.log(data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const themeSlice = createSlice ({
  name: "theme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(__getTheme.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(__getTheme.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
      // console.log(action.payload);
    })
    .addCase(__getTheme.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // console.log("rejected");
    });
  }
})

export default themeSlice;
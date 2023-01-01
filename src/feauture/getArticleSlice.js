import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = {
  loading:false,
  error:'',
  dataArticles :[],
};

const url_api = "http://127.0.0.1:8000/api/articles";

export const fetchDataArticles = createAsyncThunk("getArticle/fetchDataArticles", async () => {
  try {
    const responseData = await Axios.get(`${url_api}`);
    return responseData.data.data;
  } catch (err) {
    return err.message;
  }
});

const getArticleSlice = createSlice({
  name: "getArticle",
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDataArticles.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchDataArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.dataArticles = state.dataArticles.concat(action.payload);
     
      })
      .addCase(fetchDataArticles.rejected, (state, action) => {
        state.error = action.payload;
      })

  },
});

export const dataAllArticles = state => state.getArticle.dataArticles;
export default getArticleSlice.reducer;

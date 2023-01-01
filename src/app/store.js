import { configureStore } from "@reduxjs/toolkit";
import getArticleSlice from "../feauture/getArticleSlice";

export const store = configureStore({
  reducer: {
    getArticle : getArticleSlice
  },
});

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import serachSlice from "./serachSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    search: serachSlice,
  },
});
export default store;

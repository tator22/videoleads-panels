import { createSlice } from "@reduxjs/toolkit";
import { CONSTANTS } from "@repo/utilities";

const initialState = {
  sideBarMode: localStorage?.getItem(CONSTANTS.SIDEBAR_MODE) || "expanded",
} as {
  sideBarMode: "collapsed" | "expanded";
};

const sideBarModeSlice = createSlice({
  name: "sideBarMode",
  initialState,
  reducers: {
    toggleSideBarMode: (state) => {
      if (state?.sideBarMode === "collapsed") {
        state.sideBarMode = "expanded";
        localStorage.setItem(CONSTANTS.SIDEBAR_MODE, "expanded");
      } else {
        state.sideBarMode = "collapsed";
        localStorage.setItem(CONSTANTS.SIDEBAR_MODE, "collapsed");
      }
    },
    resetSideBarMode: (state) => {
      state.sideBarMode = "collapsed";
      localStorage.setItem(CONSTANTS.SIDEBAR_MODE, "collapsed");
    },
  },
});

export const { toggleSideBarMode, resetSideBarMode } = sideBarModeSlice.actions;

export default sideBarModeSlice.reducer;

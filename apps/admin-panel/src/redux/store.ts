import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import drawer from "./slice/otherSlices/drawerSlice";
import sideBarMode from "./slice/otherSlices/sideBarModeSlice";

// Combine all reducers
const rootReducer = combineReducers({
  drawer,
  sideBarMode,
});

const rootReducerWithReset = (state: any, action: any) => {
  // if (action.type === LOGOUT_ACTION) {
  //   state = undefined;
  // }
  return rootReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducerWithReset,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

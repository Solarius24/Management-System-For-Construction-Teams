import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../slices/formSlice";
import formScheduleReducer from "../slices/formScheduleSlice";
import taskReducer from "../slices/taskSlice";
import userReducer from "../slices/userSlice";
import processReducer from "../slices/processSlice";
import { apiSlice } from "../slices/apiSlice";
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    form: formReducer,
    formSchedule: formScheduleReducer,
    task: taskReducer,
    userData: userReducer,
    processes: processReducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools:false
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

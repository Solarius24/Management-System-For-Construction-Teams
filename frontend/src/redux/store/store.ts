import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../slices/formSlice";
import formScheduleReducer from "../slices/formScheduleSlice";
import taskReducer from "../slices/taskSlice";
import userReducer from "../slices/userSlice";
import processReducer from "../slices/processSlice";
const store = configureStore({
  reducer: {
    form: formReducer,
    formSchedule: formScheduleReducer,
    task: taskReducer,
    userData: userReducer,
    processes: processReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

import { createSlice } from '@reduxjs/toolkit'

interface TaskState {

}

const initialState: TaskState = {

}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
// export const { } = taskSlice.actions

export default taskSlice.reducer
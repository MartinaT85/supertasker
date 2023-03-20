// we need some data structure to hold our tasks
// typescript out of the box doesn't know what an empty array is

import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"

// shape of the state
export type TasksState = {
    entities: Task[]
}

const initialState: TasksState = {
    entities: [],
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.entities.unshift(action.payload)
        },
        removeTasks: (state) => state,
    }
})


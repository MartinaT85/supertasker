// we need some data structure to hold our tasks
// typescript out of the box doesn't know what an empty array is

import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit"


// shape of the state
export type TasksState = {
    entities: Task[]
}

type DraftTask = RequireOnly<Task, 'title'>

const createTask = (draftTask: DraftTask): Task => {
    return {...draftTask, id: nanoid()}
}

const initialState: TasksState = {
    entities: [],
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const task = createTask(action.payload)
            state.entities.unshift(task)
        },
        removeTasks: (state) => state,
    }
})

export const tasksReducer = tasksSlice.reducer
export const {addTask, removeTasks } = tasksSlice.actions

export default tasksSlice

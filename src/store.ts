import  {configureStore} from '@reduxjs/toolkit'
import { tasksReducer } from './features/task-slice'

const store = configureStore({
    reducer: tasksReducer
})

export default store
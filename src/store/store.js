import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'

const loadState = () => {
  try {
    const serialized = localStorage.getItem('taskflow_state')
    if (!serialized) return undefined
    return JSON.parse(serialized)
  } catch (e) {
    return undefined
  }
}

const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state)
    localStorage.setItem('taskflow_state', serialized)
  } catch (e) {}
}

const preloaded = loadState()

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  },
  preloadedState: preloaded
})

store.subscribe(() => {
  saveState(store.getState())
})

export default store

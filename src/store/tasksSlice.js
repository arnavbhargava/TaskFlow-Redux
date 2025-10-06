import { createSlice, nanoid } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    filter: 'all',
    search: ''
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.unshift(action.payload)
      },
      prepare(title, description='') {
        return { payload: { id: nanoid(), title, description, completed: false, createdAt: Date.now() } }
      }
    },
    toggleTask(state, action) {
      const t = state.items.find(i => i.id === action.payload)
      if (t) t.completed = !t.completed
    },
    deleteTask(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload)
    },
    editTask(state, action) {
      const { id, title, description } = action.payload
      const t = state.items.find(i => i.id === id)
      if (t) {
        t.title = title
        t.description = description
      }
    },
    setFilter(state, action) {
      state.filter = action.payload
    },
    setSearch(state, action) {
      state.search = action.payload
    },
    clearAll(state) {
      state.items = []
    }
  }
})

export const { addTask, toggleTask, deleteTask, editTask, setFilter, setSearch, clearAll } = tasksSlice.actions
export default tasksSlice.reducer

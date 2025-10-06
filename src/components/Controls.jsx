import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, setSearch, clearAll } from '../store/tasksSlice'

export default function Controls(){
  const dispatch = useDispatch()
  const filter = useSelector(s=>s.tasks.filter)
  const search = useSelector(s=>s.tasks.search)
  return (
    <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div className="flex items-center gap-2">
        <input value={search} onChange={e=>dispatch(setSearch(e.target.value))} placeholder="Search tasks..." className="border rounded px-3 py-2 focus:outline-none" />
        <select value={filter} onChange={e=>dispatch(setFilter(e.target.value))} className="border rounded px-3 py-2 focus:outline-none">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={()=>dispatch(clearAll())} className="px-3 py-2 border rounded">Clear All</button>
      </div>
    </div>
  )
}
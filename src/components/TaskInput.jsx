import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/tasksSlice'

export default function TaskInput(){
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const dispatch = useDispatch()

  const submit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    dispatch(addTask(title.trim(), desc.trim()))
    setTitle(''); setDesc('')
  }

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="What needs to be done?" className="flex-1 border rounded px-3 py-2 focus:outline-none" />
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
      <div className="w-full mt-2">
        <textarea value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Optional description" className="w-full border rounded px-3 py-2 mt-2 focus:outline-none"></textarea>
      </div>
    </form>
  )
}
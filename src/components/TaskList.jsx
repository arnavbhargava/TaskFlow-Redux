// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { toggleTask, deleteTask } from '../store/tasksSlice'

// export default function TaskList(){
//   const { items, filter, search } = useSelector(s=>s.tasks)
//   const dispatch = useDispatch()

//   const filtered = items.filter(t=>{
//     if (filter === 'completed' && !t.completed) return false
//     if (filter === 'pending' && t.completed) return false
//     if (search && !t.title.toLowerCase().includes(search.toLowerCase()) && !t.description.toLowerCase().includes(search.toLowerCase())) return false
//     return true
//   })

//   if (filtered.length === 0) return <div className="mt-4 text-gray-600 dark:text-gray-300">No tasks found.</div>

//   return (
//     <ul className="mt-4 space-y-3">
//       {filtered.map(task => (
//         <li key={task.id} className="flex items-start justify-between bg-gray-50 dark:bg-slate-800 p-3 rounded">
//           <div>
//             <div className="flex items-center gap-2">
//               <input type="checkbox" checked={task.completed} onChange={()=>dispatch(toggleTask(task.id))} />
//               <div className="font-medium">{task.title}</div>
//             </div>
//             {task.description && <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{task.description}</div>}
//           </div>
//           <div className="flex items-center gap-2">
//             <button onClick={()=>dispatch(deleteTask(task.id))} className="px-2 py-1 border rounded text-sm">Delete</button>
//           </div>
//         </li>
//       ))}
//     </ul>
//   )
// }

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask, editTask } from "../store/tasksSlice";

export default function TaskList() {
  const { items, filter, search } = useSelector((s) => s.tasks);
  const dispatch = useDispatch();

  // Local edit states
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const startEdit = (task) => {
    setEditId(task.id);
    setEditTitle(task.title);
    setEditDesc(task.description || "");
  };

  const saveEdit = (id) => {
    if (!editTitle.trim()) return;
    dispatch(
      editTask({ id, title: editTitle.trim(), description: editDesc.trim() })
    );
    setEditId(null);
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditTitle("");
    setEditDesc("");
  };

  const filtered = items.filter((t) => {
    if (filter === "completed" && !t.completed) return false;
    if (filter === "pending" && t.completed) return false;
    if (
      search &&
      !t.title.toLowerCase().includes(search.toLowerCase()) &&
      !t.description.toLowerCase().includes(search.toLowerCase())
    )
      return false;
    return true;
  });

  if (filtered.length === 0)
    return (
      <div className="mt-4 text-gray-600 dark:text-gray-300">
        No tasks found.
      </div>
    );

  return (
    <ul className="mt-4 space-y-3">
      {filtered.map((task) => (
        <li
          key={task.id}
          className="flex flex-col md:flex-row md:items-start md:justify-between bg-gray-50 dark:bg-slate-800 p-3 rounded"
        >
          <div className="flex-1">
            {editId === task.id ? (
              <div className="space-y-2">
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full border rounded px-2 py-1 focus:outline-none"
                />
                <textarea
                  value={editDesc}
                  onChange={(e) => setEditDesc(e.target.value)}
                  className="w-full border rounded px-2 py-1 focus:outline-none"
                  rows={2}
                ></textarea>
                <div className="flex gap-2">
                  <button
                    onClick={() => saveEdit(task.id)}
                    className="px-3 py-1 bg-green-600 text-white rounded text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="px-3 py-1 border rounded text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => dispatch(toggleTask(task.id))}
                  />
                  <div
                    className={`font-medium ${
                      task.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {task.title}
                  </div>
                </div>
                {task.description && (
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {task.description}
                  </div>
                )}
              </div>
            )}
          </div>
          {editId !== task.id && (
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <button
                onClick={() => startEdit(task)}
                className="px-3 py-1 border rounded text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="px-3 py-1 border rounded text-sm"
              >
                Delete
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const theme = () => document.documentElement.classList.contains("dark");
  useEffect(() => setMounted(true), []);
  const tasks = useSelector((state) => state.tasks.items);
  return (
    <div className="min-h-screen py-8 px-4 md:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 shadow-md rounded-2xl p-6">
        <Header />
        <div className="mt-4">
          <TaskInput />
          <Controls />
          <TaskList />
        </div>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Total tasks: {tasks.length}
        </div>
      </div>
    </div>
  );
}

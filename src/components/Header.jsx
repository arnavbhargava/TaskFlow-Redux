import React from 'react'

export default function Header(){
  const toggle = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">TaskFlow</h1>
      <div className="flex items-center gap-3">
        <button onClick={toggle} aria-label="toggle theme" className="px-3 py-1 border rounded">
          Toggle Theme
        </button>
      </div>
    </header>
  )
}
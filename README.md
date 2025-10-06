# TaskFlow - Redux Task Manager

Minimal React + Redux Toolkit task manager with Tailwind CSS and localStorage persistence.

## Features
- Add / Edit / Delete tasks (Edit can be added easily)
- Mark tasks completed / pending
- Persistent state stored in localStorage
- Search and filter (All / Completed / Pending)
- Light / Dark theme toggle

## Setup
1. Unzip the project and open the folder in VS Code.
2. Run `npm install`
3. Run `npm run dev`
4. Open the app at the local dev server printed by Vite (usually http://localhost:5173)

## Notes
- Uses Vite for fast development.
- Uses Redux Toolkit for state management and saves state to `localStorage` under `taskflow_state` key.

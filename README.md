# Task Management App (Mini Kanban Board)

![Project Screenshot](/path-to-screenshot.png) <!-- Add screenshot if available -->

A simple Kanban-style task management application built with Next.js and TypeScript. Manage tasks across three stages (To Do, In Progress, Done) with drag & drop functionality and Firebase persistence.

## Features

### Functional Features
- **Create Tasks**: Add new tasks with title and optional description.
- **Task Categories**: Organize tasks into 3 columns (To Do, In Progress, Done).
- **Drag & Drop**: Move tasks between columns using drag and drop.
- **Sort Tasks**: Newly created tasks appear at the top of the list.
- **Edit Tasks**: Modify existing task details.
- **Delete Tasks**: Remove tasks permanently.
- **Data Persistence**: Automatic sync with local IndexedDB backup.
- **Theme Support**: Toggle between light/dark or system preference modes.


### Technical Features
- Type-safe implementation with TypeScript.
- Responsive UI using TailwindCSS.
- State management with Redux Toolkit.
- Smooth drag & drop interactions with dnd-kit.
- Offline-first approach using IndexedDB (idb-keyval).

## Screenshots
<div>
  <img src="/public/images/home-screen.png" width="45%" alt="Home Screen">
  <img src="/public/images/setting-screen.png" width="45%" alt="Setting Screen">
<img src="/public/images/mobile-view.png" width="45%" alt="Mobile View">
</div>


## Tech Stack

- **Frontend**: Next.js 15 + React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: Redux Toolkit
- **Drag & Drop**: @dnd-kit/core
- **Local Storage**: idb-keyval

## Installation

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- Firebase project setup (optional for real-time sync)

### Steps
1. **Clone Repository**
   ```bash
   git clone https://github.com/HtetThuYaAungg/task-manager.git
   cd task-manager
   ```
2. **Install Dependencies**
   ```bash
   npm install  # or yarn install
   ```
3. **Start Development Server**
   ```bash
   npm run dev  # or yarn dev
   ```
4. **Build for Production**
   ```bash
   npm run build  # or yarn build
   npm start
   ```

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## License
This project is licensed under the MIT License.


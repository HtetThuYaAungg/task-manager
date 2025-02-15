import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskStatus } from '../types/task';


interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const newTask = { ...action.payload, id: Date.now().toString() };
      state.tasks.push(newTask);
    },
    moveTask: (state, action: PayloadAction<{id: string; newStatus: TaskStatus}>) => {
      const task = state.tasks.find(t => t.id === action.payload.id);
      if (task) task.status = action.payload.newStatus;
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(t => t.id === action.payload.id);
      if (index !== -1) state.tasks[index] = action.payload;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, moveTask, updateTask, deleteTask, setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;

import { get, set } from 'idb-keyval';
import { Task } from '../types/task';

const DB_KEY = 'tasks';

export const loadTasksFromDB = async (): Promise<Task[]> => {
  const tasks = await get<Task[]>(DB_KEY);
  return tasks || [];
};

export const saveTasksToDB = async (tasks: Task[]): Promise<void> => {
  await set(DB_KEY, tasks);
};
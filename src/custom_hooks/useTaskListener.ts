import { useEffect, useState } from "react";
import { setTasks } from "../features/taskSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { loadTasksFromDB, saveTasksToDB } from "../helpers/db";

export default function useTaskListener() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(state => state.tasks.tasks);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      const loadedTasks = await loadTasksFromDB();
      dispatch(setTasks(loadedTasks));
      setLoaded(true);
    };
    loadTasks();
  }, [dispatch]);

  useEffect(() => {
    if (loaded) {
      saveTasksToDB(tasks);
    }
  }, [tasks, loaded]);  // Only save when data is fully loaded
}

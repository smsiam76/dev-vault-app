import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { getTasks } from "../api/tasksApi";

const useTasks = () => {
  // get users from auth
  const { user } = useAuth();

  //   create a state to store tasks data
  const [tasks, setTasks] = useState([]);

  //create a state to Loader
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);

        const data = await getTasks(user?.email);

        setTasks(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchTasks();
    }
  }, [user?.email]);

  return {
    tasks,
    loading,
    setTasks,
  };
};

export default useTasks;

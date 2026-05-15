import api from "./api"

// get all task thorugh email
export const getTasks = async (email) => {
  const res = await api.get(`/tasks?email=${email}`);
  return res.data;
};

// add task
export const addTasks = async (taskData) => {
    const res = await api.post("/tasks", taskData);
    return res.data;
}

// // delete task
// export const deleteTask = async (id) => {
//   const res = await api.delete(`/tasks/${id}`);
//   return res.data;
// };

// // update task
// export const updateTask = async (id, updatedData) => {
//   const res = await api.patch(`/tasks/${id}`, updatedData);
//   return res.data;
// };
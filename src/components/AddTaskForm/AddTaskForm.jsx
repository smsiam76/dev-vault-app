import { ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { addTasks } from "../../api/tasksApi";

const AddTaskForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);

      const taskData = {
        createdBy: user?.email,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isCompleted: false,
        status: "pending",
        ...data,
      };
      console.log(taskData);

      // send to server and then navigate to home
      const res = await addTasks(taskData);
      console.log(res);
      if(res.insertedId){
        toast.success(`Your Task- (${taskData.taskTitle}) Addeded Successfully`);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  //   console.log(watch("example"));

  return (
    <div className="">
      <h3 className="font-bold text-2xl text-primary">Add Task</h3>
      <span className="block h-0.5 bg-secondary/20 my-4"></span>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="space-y-2">
          {/* Task Title */}
          <div className="">
            <input
              type="text"
              className="bg-primary/5 w-full border-2 border-primary/40 rounded-md text-lg py-3 px-4 outline-0 focus:outline-2 outline-offset-1 outline-primary/80"
              placeholder="Task Title *"
              {...register("taskTitle", {
                required: "Task Title is required *",
              })}
            />
            {errors.taskTitle && (
              <p className="text-red-500 text-sm mt-1 ml-1">
                {errors.taskTitle.message}
              </p>
            )}
          </div>

          {/* Task Description */}
          <div className="">
            <textarea
              className="bg-primary/5 w-full border-2 border-primary/40 rounded-md text-lg py-3 px-4 outline-0 focus:outline-2 outline-offset-1 outline-primary/80"
              placeholder="Description"
              {...register("taskDescription", {
                required: "Task Description Field is required *",
              })}
            ></textarea>
            {errors.taskDescription && (
              <p className="text-red-500 text-sm mt-1 ml-1">
                {errors.taskDescription.message}
              </p>
            )}
          </div>

          {/* Priority Level */}
          <div className="">
            <div className="relative">
              <select
                defaultValue=""
                className="appearance-none bg-primary/5 w-full border-2 border-primary/40 rounded-md text-lg py-3 px-4 outline-0 focus:outline-2 outline-offset-1 outline-primary/80 text-black/60"
                {...register("priorityLevel", {
                  required: "Priority Level Field is required *",
                })}
              >
                <option value="" disabled>
                  Priority Level
                </option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>

              {/* Custom Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <span className="text-black/60 text-sm">
                  <ChevronDown />
                </span>
              </div>
            </div>

            {errors.priorityLevel && (
              <p className="text-red-500 text-sm mt-1 ml-1">
                {errors.priorityLevel.message}
              </p>
            )}
          </div>

          {/* Deadline */}
          <div>
            <fieldset className="fieldset-label mb-1">Deadline</fieldset>
            <input
              type="datetime-local"
              className="bg-primary/5 w-full border-2 border-primary/40 rounded-md text-lg py-3 px-4 outline-0 focus:outline-2 outline-offset-1 outline-primary/80"
              placeholder="Deadline"
              {...register("deadline", {
                required: "Deadline Field is required *",
              })}
            />
            {errors.deadline && (
              <p className="text-red-500 text-sm mt-1 ml-1">
                {errors.deadline.message}
              </p>
            )}
          </div>
          <div className="mt-8">
            <PrimaryBtn text="Add" type="submit" className="w-full" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;

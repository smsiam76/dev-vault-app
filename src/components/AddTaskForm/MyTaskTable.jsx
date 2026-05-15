import { format } from "date-fns";
import { Check, Eye, SquarePen, Trash } from "lucide-react";

const MyTaskTable = ({ tasks }) => {
  console.log(tasks);

  // date format
  const formatDate = (date) => {
    if (!date) return "-";
    return format(new Date(date), "dd MMM yyy");
  };
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th className="text-start">Title</th>
            <th>Priority</th>
            <th>Created</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task, idx) => (
            <tr className="text-center" key={task?._id}>
              <th>{idx + 1}</th>
              <td className="text-start">{task?.taskTitle} </td>

              <td className="">
                {task?.priorityLevel == "High" && (
                  <span className="text-sm bg-red-500 text-white px-2 py-1 rounded-md">
                    {task?.priorityLevel}
                  </span>
                )}
                {task?.priorityLevel == "Medium" && (
                  <span className="text-sm bg-green-500 text-white px-2 py-1 rounded-md">
                    {task?.priorityLevel}
                  </span>
                )}
                {task?.priorityLevel == "Low" && (
                  <span className="text-sm bg-amber-500 text-white px-2 py-1 rounded-md">
                    {task?.priorityLevel}
                  </span>
                )}
              </td>
              <td>{formatDate(task?.createdAt)}</td>
              <td>
                {task?.deadline
                  ? format(new Date(task.deadline), "dd MMM yyyy - HH:mm")
                  : "-"}
              </td>
              <td>
                {task?.status == "pending" && (
                  <span className="text-sm bg-yellow-500 text-white px-2 py-1 rounded-md cursor-pointer">
                    Pending
                  </span>
                )}
                {task?.status == "complete" && (
                  <span className="text-sm bg-cyan-500 text-white px-2 py-1 rounded-md cursor-pointer">
                    Complete
                  </span>
                )}
              </td>
              <td className="flex gap-3 justify-center">
                <button className="bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded-md cursor-pointer hover:bg-primary duration-300 ease-in-out">
                  <Eye />
                </button>
                <button className="bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-md cursor-pointer hover:bg-green-500 duration-300 ease-in-out">
                  <Check />
                </button>
                <button className="bg-yellow-600 text-white text-xs font-medium px-2 py-1 rounded-md cursor-pointer hover:bg-yellow-500 duration-300 ease-in-out">
                  <SquarePen />
                </button>
                <button className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-md cursor-pointer hover:bg-red-600 duration-300 ease-in-out">
                  <Trash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTaskTable;

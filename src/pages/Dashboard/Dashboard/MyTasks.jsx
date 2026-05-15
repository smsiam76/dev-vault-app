import AddTaskForm from "../../../components/AddTaskForm/AddTaskForm";
import MyTaskTable from "../../../components/AddTaskForm/MyTaskTable";
import PrimaryBtn from "../../../components/Shared/Button/PrimaryBtn";
import Divider from "../../../components/Shared/Divider/Divider";
import Loader from "../../../components/Shared/Loader/Loader";

import useTasks from "../../../hooks/UseTasks";

const MyTasks = () => {
  // get tasks from useTasks hook
  const { tasks, loading } = useTasks();

  console.log(tasks);

  // loading statemnet
  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <PrimaryBtn
        onClick={() => document.getElementById("my_modal_5").showModal()}
        text="Add Task"
        className="mb-8"
      ></PrimaryBtn>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <AddTaskForm />
          <Divider />
          <div className="">
            <form method="dialog" className="modal-backdrop">
              {/* if there is a button in form, it will close the modal */}
              <PrimaryBtn
                type="submit"
                className="bg-red-500 hover:bg-red-600 w-full"
                text="Close"
              />
            </form>
          </div>
        </div>
        {/* Outside click closes modal */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* task table */}
      <MyTaskTable tasks={tasks}></MyTaskTable>
    </div>
  );
};

export default MyTasks;

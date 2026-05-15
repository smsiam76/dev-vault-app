import { ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";
import useAuth from "../../hooks/useAuth";
import api from "../../api/api";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const AddResourceForm = () => {
  // get user form Auth
  const { user } = useAuth();

  // navigate
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {

      const resourcesData = {
        createdBy: user?.email,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isCompleted: false,
        isPinned: false,
        status: "pending",
        ...data,
      };
      console.log(resourcesData);

      // send to server and navigate home
      const res = await api.post("/resources", resourcesData);
      if (res.data.insertedId) {
        // toast
        toast.success(
          `${resourcesData.resourceTitle} resources Added Successfully`,
        );

        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }

    // axios.post("http://localhost:5000/tasks", resourcesData)
    // .then(res => {
    //     console.log(res.data);
    // })
  };

  //   console.log(watch("example"));

  return (
    <div className="">
      <h3 className="font-bold text-2xl text-primary">Add Reources</h3>
      <span className="block h-0.5 bg-secondary/20 my-4"></span>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="space-y-2">
          {/* Resource Title */}
          <div className="">
            <input
              type="text"
              className="bg-primary/5 w-full border-2 border-primary/40 rounded-md text-lg py-3 px-4 outline-0 focus:outline-2 outline-offset-1 outline-primary/80"
              placeholder="Resource Title *"
              {...register("resourceTitle", {
                required: "Resource Title is required *",
              })}
            />
            {errors.resourceTitle && (
              <p className="text-red-500 text-sm mt-1 ml-1">
                {errors.resourceTitle.message}
              </p>
            )}
          </div>

          {/*Resource Link */}
          <div className="">
            <input
              type="url"
              className="bg-primary/5 w-full border-2 border-primary/40 rounded-md text-lg py-3 px-4 outline-0 focus:outline-2 outline-offset-1 outline-primary/80"
              placeholder="Resource Link *"
              {...register("resourceLink", {
                required: "Resource Link is required *",
              })}
            />
            {errors.resourceLink && (
              <p className="text-red-500 text-sm mt-1 ml-1">
                {errors.resourceLink.message}
              </p>
            )}
          </div>

          {/* Resource Type */}
          <div className="">
            <div className="relative">
              <select
                defaultValue=""
                className="appearance-none bg-primary/5 w-full border-2 cursor-pointer border-primary/40 rounded-md text-lg py-3 px-4 outline-0 focus:outline-2 outline-offset-1 outline-primary/80 text-black/60"
                {...register("resourceType", {
                  required: "Resource Type Field is required *",
                })}
              >
                <option value="" disabled>
                  Resource Type
                </option>
                <option>Video</option>
                <option>Article</option>
                <option>Documentation</option>
                <option>Repository</option>
                <option>Course</option>
              </select>

              {/* Custom Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                <span className="text-black/60 text-sm">
                  <ChevronDown />
                </span>
              </div>
            </div>

            {errors.resourceType && (
              <p className="text-red-500 text-sm mt-1 ml-1">
                {errors.resourceType.message}
              </p>
            )}
          </div>

          {/* Personal Note */}
          <div className="">
            <textarea
              className="bg-primary/5 w-full border-2 border-primary/40 rounded-md text-lg py-3 px-4 outline-0 focus:outline-2 outline-offset-1 outline-primary/80"
              placeholder="Personal Note"
              {...register("personalNote", {
                required: "Personal Note Field is required *",
              })}
            ></textarea>
            {errors.personalNote && (
              <p className="text-red-500 text-sm mt-1 ml-1">
                {errors.personalNote.message}
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

export default AddResourceForm;

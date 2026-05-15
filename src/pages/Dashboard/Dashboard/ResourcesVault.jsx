import AddResourceForm from "../../../components/AddResourceForm/AddResourceForm";
import ResourcesBox from "../../../components/AddResourceForm/ResourcesBox";
import PrimaryBtn from "../../../components/Shared/Button/PrimaryBtn";
import Divider from "../../../components/Shared/Divider/Divider";
import Loader from "../../../components/Shared/Loader/Loader";
import UseResources from "../../../hooks/UseResources";

const ResourcesVault = () => {
  const { resources, loading } = UseResources();
  console.log(resources);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <PrimaryBtn
        onClick={() => document.getElementById("my_modal_5").showModal()}
        text="Add Resources"
      ></PrimaryBtn>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <AddResourceForm />
          <Divider />
          <div className="">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <PrimaryBtn
                type="submit"
                className="bg-red-500 hover:bg-red-600 w-full"
                text="Close"
              />
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </div>
        </div>
        {/* Outside click closes modal */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* resources card */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {resources?.map((resource) => (
          <ResourcesBox resource={resource} key={resource?._id} />
        ))}
      </div>
    </div>
  );
};

export default ResourcesVault;

const Heaader = ({title}) => {
  return (
    <header className="p-6">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h4 className="font-semibold text-3xl text-primary">{title ? title : "Dashboard"}</h4>
        </div>
        <form className="flex-1 text-right" action="">
          <input className="bg-primary/5 md:w-1/2 border-2 border-primary/40 rounded-md text-lg py-3 px-4 outline-0 focus:outline-2 outline-offset-1 outline-primary/80" type="search" name="" id="" placeholder="Search Here" />
        </form>
      </div>
    </header>
  );
};

export default Heaader;

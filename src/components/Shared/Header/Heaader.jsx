const Heaader = ({title}) => {
  return (
    <header className="p-6">
      <div className="flex justify-between">
        <div>
          <h4 className="font-semibold text-3xl">{title ? title : "Dashboard"}</h4>
        </div>
        <form action="">
          <input className="input" type="search" name="" id="" placeholder="Search Here" />
        </form>
      </div>
    </header>
  );
};

export default Heaader;

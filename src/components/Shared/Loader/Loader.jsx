import "./Loader.css";

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="loader-wrapper">
        <div className="newtons-cradle">
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
          <div className="newtons-cradle__dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

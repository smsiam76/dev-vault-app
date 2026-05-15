
const FormBtn = ({text, onClick,type="button", className=""}) => {
    return (
         <button 
        type={type}
        onClick={onClick}
        className={`bg-primary text-white text-lg font-medium px-4 py-2 rounded-md cursor-pointer hover:bg-secondary duration-300 ease-in-out ${className}`}>{text}</button>
    );
};

export default FormBtn;
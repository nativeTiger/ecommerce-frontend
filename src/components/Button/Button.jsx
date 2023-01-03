const Button = ({ name, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-green text-white font-poppins font-medium text-lg border-none px-7 py-3 rounded-md"
    >
      {name}
    </button>
  );
};

export default Button;

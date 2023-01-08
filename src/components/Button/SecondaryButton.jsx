const SecondaryButton = ({ name }) => {
  return (
    <button
      type="button"
      className="px-10 py-4 border-green border-2 rounded-md duration-300 hover:bg-green hover:text-white font-poppins text-base"
    >
      {name}
    </button>
  );
};

export default SecondaryButton;

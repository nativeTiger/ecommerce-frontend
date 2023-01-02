const SectionTitle = ({ title }) => {
  return (
    <>
      <h2 className={`text-lg relative text-darkGray font-lato font-bold`}>
        {title}
      </h2>
      <span className="w-32 h-1 bg-green absolute rounded-md"></span>
    </>
  );
};

export default SectionTitle;

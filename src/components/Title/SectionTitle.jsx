const SectionTitle = ({ title }) => {
  return (
    <div className="pb-10">
      <h2 className={`text-lg relative text-darkGray font-lato font-bold`}>
        {title}
      </h2>
      <span className="w-32 h-1 bg-green absolute rounded-md"></span>
    </div>
  );
};

export default SectionTitle;

const TechCard = ({ text, src }) => {
  return (
    <div className="w-[550px] h-[300px] flex flex-col  bg-white rounded-lg flex-wrap">
      <p className="text-[26px] font-bold text-center mb-5  text-blue-500">
        {text}
      </p>
      <img src={src} alt={text} />
    </div>
  );
};

export default TechCard;

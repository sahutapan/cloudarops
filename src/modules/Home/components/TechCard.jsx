const TechCard = ({ text, src }) => {
  return (
    <div className="w-[350px] h-[260px] flex flex-col gap-6 bg-white rounded flex-wrap">
      <p className="text-[26px] font-bold text-center">{text}</p>
      <img src={src} alt={text} srcset="" />
    </div>
  );
};

export default TechCard;

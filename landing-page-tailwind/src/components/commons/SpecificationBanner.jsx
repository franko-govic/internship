const SpecificationBanner = ({ title, info }) => {
  return (
    <div className="flex gap-5  items-center">
      <p className="flex-1 text-2xl font-bold">{title}</p>
      <p className="flex-1 text-sm">{info}</p>
    </div>
  );
};

export default SpecificationBanner;

type HowItWorksCardsProps = {
  title: string;
  description: string;
};

const HowItWorksCard = ({ title, description }: HowItWorksCardsProps) => {
  return (
    <div className="bg-HowTo-Cards-Background border border-HowTo-Cards-Background rounded-[20px] px-[20px] p-[30px] flex flex-col items-center">
      <h1 className="text-[20px] font-raleway font-semibold mb-[13px] text-white">
        {title}
      </h1>
      <p className="text-Light-Gray-1 text-center md:text-left mt-auto text-[15px]">
        {description}
      </p>
    </div>
  );
};

export default HowItWorksCard;

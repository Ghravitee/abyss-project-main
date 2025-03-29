type HowToWinCardProps = {
  cardImage: string;
  title: string;
  description: string;
  list1?: string;
  list2?: string;
};

const HowToWinCard = ({
  cardImage,
  title,
  description,
  list1,
  list2,
}: HowToWinCardProps) => {
  return (
    <div className="bg-HowTo-Cards-Background border border-HowTo-Cards-Background rounded-[18px] flex gap-[21px] items-start py-8 px-4">
      <img src={cardImage} alt="" />
      <div>
        <h3 className="text-[20px] font-raleway font-extrabold mb-[10px] text-Light-Gray">
          {title}
        </h3>
        <div className="text-Light-Gray-1 text-left">
          <p>{description}</p>

          {(list1 || list2) && (
            <ul className="pl-6 list-disc text-left">
              {list1 && <li>{list1}</li>}
              {list2 && <li>{list2}</li>}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HowToWinCard;

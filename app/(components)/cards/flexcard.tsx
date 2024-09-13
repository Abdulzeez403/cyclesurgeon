import React from "react";

interface IFlexCardProps {
  className?: string;
  title: string;
  subTitle: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const FlexCard = ({
  className = "",
  title,
  subTitle,
  icon: Icon,
}: IFlexCardProps) => {
  return (
    <div className={`flex gap-4 items-center ${className}`}>
      <div>
        <Icon width={40} height={40} /> {/* Render the icon here */}
      </div>
      <div>
        <h4>{title}</h4>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

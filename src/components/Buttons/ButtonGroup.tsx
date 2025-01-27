import React, { ReactNode } from "react";

interface ButtonGroupProps {
  buttons: {
    icon: ReactNode;
    label: string;
    onClick: () => void;
    isActive?: boolean;
  }[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  return (
    <div className="w-full flex flex-col md:flex-row rounded-md" role="group">
      {buttons.map((button, index) => (
        <button
          key={index}
          type="button"
          onClick={button.onClick}
          className={`rounded-md w-full md:w-2/3 flex flex-row items-center font-sans font-bold text-white border-2 border-pink transition ease-in-out p-4 justify-center hover:border-green hover:text-green uppercase hover:bg-pink bg-pink-accent
               `}
        >
          <div className="w-4 h-4 mr-4">{button.icon}</div>
          <div>{button.label}</div>
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;

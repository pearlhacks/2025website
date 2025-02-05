import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonGroupProps {
  buttons: {
    icon: ReactNode;
    label: string;
    href: string;
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
          className={`rounded-md w-full md:w-2/3  font-sans font-bold text-white border-2 border-pink transition ease-in-out p-4 hover:border-green hover:text-green uppercase hover:bg-pink bg-pink-accent
               `}
        >
          <Link href={button.href}>
            <div className="flex flex-row items-center  justify-center">
              <div className="w-4 h-4 mr-4">{button.icon}</div>
              <div>{button.label}</div>
            </div>
          </Link>
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;

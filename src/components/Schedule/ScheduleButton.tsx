"use client";

import { FC, ReactNode, MouseEventHandler } from "react";
import Link from "next/link";

interface ScheduleButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const ScheduleButton: FC<ScheduleButtonProps> = ({
  children,
  href,
  className,
  onClick,
}) => {
  const buttonContent = (
    <span
      className={`w-40 font-medium rounded-full text-medium px-10 py-5 text-center mb-2 ${className}`}
    >
      {children}
    </span>
  );

  return href ? (
    <Link href={href} passHref>
      <span className="flex justify-center items-center">{buttonContent}</span>
    </Link>
  ) : (
    <button onClick={onClick} className="flex justify-center items-center">
      {buttonContent}
    </button>
  );
};

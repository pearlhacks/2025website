import { FC, ReactNode } from "react";
import Link from "next/link";

interface ScheduleButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export const ScheduleButton: FC<ScheduleButtonProps> = ({
  children,
  href,
  className,
}) => {
  const buttonContent = (
    <span
      className={`text-white font-medium rounded-full text-medium px-10 py-5 text-center mb-2 ${className}`}
    >
      {children}
    </span>
  );

  return href ? (
    <Link href={href} passHref>
      <a className="flex justify-center items-center">{buttonContent}</a>
    </Link>
  ) : (
    <button className="flex justify-center items-center">
      {buttonContent}
    </button>
  );
};

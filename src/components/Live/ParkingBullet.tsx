import { ParkingBulletProps } from "@/utils/Types";
import { MapPinIcon } from "@heroicons/react/16/solid";
import Link from "next/link";


export const ParkingBullet = ({ name, address, href }: ParkingBulletProps) => {
  return (
    <Link href={href}>
      <div className="flex text-brown items-center space-x-2 p-2 border border-pink rounded-md hover:border-brown focus:border-brown">
        <MapPinIcon className="h-5 w-5" />
        <div>
          <p className="font-medium">{name}</p>
          <p>{address}</p>
        </div>
      </div>
    </Link>
  );
};

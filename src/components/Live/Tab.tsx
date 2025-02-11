// components/TabComponent.js
import {
  image_venue1,
  image_venue2,
  map_parking1,
  map_parking2,
  map_parking3,
  map_parking4,
} from "@/utils/Urls";
import { useState } from "react";
import { ParkingBullet } from "./ParkingBullet";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Venue");

  // tabs
  const tabs = ["Venue", "Parking", "Menu"];

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto">
        <div className="flex flex-nowrap min-w-full sm:min-w-0 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`
              whitespace-nowrap
              flex-1
              py-2
              px-3
              sm:px-4
              transition-colors
              duration-300
              ${
                activeTab === tab
                  ? "border-pink-accent border-b-2 text-pink-accent font-semibold"
                  : "border-brown border-b text-brown hover:border-pink-accent hover:text-pink-accent"
              }
            `}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full">
        {activeTab === "Venue" && (
          <div>
            <img src={image_venue1} />
            <img src={image_venue2} />
          </div>
        )}
        {activeTab === "Parking" && (
          <div className="flex flex-col space-y-4">
            <p className="text-sm text-brown italic">
              Click to open in Google Maps
            </p>
            {/* Friday & Saturday Parking */}
            <div>
              <h1 className="text-pink-transition font-medium mb-2">
                Friday (After 5PM) & Saturday Parking
              </h1>
              <div className="text-brown space-y-2">
                <ParkingBullet
                  name={"Bell Tower Parking Deck"}
                  href={map_parking1}
                  address={"Bell Tower Parking Deck, Chapel Hill, NC 27514"}
                />
                <ParkingBullet
                  name={"Cobb Parking Deck"}
                  href={map_parking2}
                  address={"Paul Green Drive, Chapel Hill, NC 27514"}
                />
              </div>
            </div>

            {/* Sunday Parking */}
            <div>
              <h1 className="text-pink-transition font-medium mb-2">
                Sunday Parking
              </h1>
              <div className="space-y-2">
                <ParkingBullet
                  name={"Parking lots off of Cameron Avenue"}
                  href={map_parking3}
                  address={"240 E Cameron Ave, Chapel Hill, NC 27514"}
                />
                <ParkingBullet
                  name={"Swain Parking Lot"}
                  href={map_parking4}
                  address={"105 E Cameron Ave, Chapel Hill, NC 27514"}
                />
              </div>
            </div>
          </div>
        )}
        {activeTab === "Menu" && <div className="text-brown">TBA</div>}
      </div>
    </div>
  );
};

export default Tab;

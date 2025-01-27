// components/TabComponent.js
import { useState } from "react";

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
        {activeTab === "Venue" && <div></div>}
        {activeTab === "Parking" && <div></div>}
        {activeTab === "Menu" && <div></div>}
      </div>
    </div>
  );
};

export default Tab;

// components/TabComponent.js
import { DirectorProps } from "@/utils/Types";
import { useState } from "react";

const Tab = ({ directors } : DirectorProps) => {
  const [activeTab, setActiveTab] = useState("All");

  // filter directors based on selected tab
  const filteredDirectors = directors?.filter((director) => {
    if (activeTab === "All") return true;
    if (activeTab === "Chairs") return Boolean(director.chair);
    return director.department === activeTab;
  });

  // tabs
  const tabs = [
    "All",
    "Chairs",
    "Marketing",
    "Experience",
    "Logistics",
    "Sponsorship",
  ];

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredDirectors?.map((director, index) => (
          <div
            key={index}
            className="bg-white shadow-sm px-2 py-5 text-center rounded-lg justify-center flex flex-col items-center space-y-4"
          >
            {director.image_url && <img
              src={director.image_url}
              alt={`${director.name}'s image`}
              className="w-36 h-36 rounded-full object-cover"
            />}
            <div>
              <h3 className="text-lg font-semibold">{director.name}</h3>
              <p className="text-gray-500">({director.pronouns})</p>
              <p className="text-brown">{director.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;

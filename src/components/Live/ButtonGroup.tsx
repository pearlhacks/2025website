import React from "react";
import ButtonGroup from "../Buttons/ButtonGroup";
import {
  ArchiveBoxArrowDownIcon,
  DocumentIcon,
} from "@heroicons/react/16/solid";
import { Discord } from "react-bootstrap-icons";
import {
  link_devpost,
  link_discord,
  link_hackerguide,
} from "@/utils/Urls";

const LiveButtonGroup: React.FC = () => {
  const buttons = [
    {
      label: "Hacker Guide",
      href: link_hackerguide,
      isActive: true,
      icon: <DocumentIcon />,
    },
    {
      label: "Discord",
      href: link_discord,
      icon: <Discord />,
    },
    {
      label: "Devpost",
      href: link_devpost,
      icon: <ArchiveBoxArrowDownIcon />,
    },
  ];

  return <ButtonGroup buttons={buttons} />;
};

export default LiveButtonGroup;

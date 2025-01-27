import React from "react";
import ButtonGroup from "../Buttons/ButtonGroup";
import {
  ArchiveBoxArrowDownIcon,
  DocumentIcon,
} from "@heroicons/react/16/solid";
import { Discord, FilePersonFill } from "react-bootstrap-icons";

const LiveButtonGroup: React.FC = () => {
  const buttons = [
    {
      label: "Hacker Guide",
      onClick: () => alert("Button 1 clicked"),
      isActive: true,
      icon: <DocumentIcon />,
    },
    {
      label: "Discord",
      onClick: () => alert("Button 2 clicked"),
      icon: <Discord />,
    },
    {
      label: "Devpost",
      onClick: () => alert("Button 3 clicked"),
      icon: <ArchiveBoxArrowDownIcon />,
    },
    {
      label: "Resume Database",
      onClick: () => alert("Button 3 clicked"),
      icon: <FilePersonFill />,
    },
  ];

  return <ButtonGroup buttons={buttons} />;
};

export default LiveButtonGroup;

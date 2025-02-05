import React from "react";
import ButtonGroup from "../Buttons/ButtonGroup";
import {
  ArchiveBoxArrowDownIcon,
  DocumentIcon,
} from "@heroicons/react/16/solid";
import { Discord, FilePersonFill } from "react-bootstrap-icons";
import { link_devpost, link_discord, link_hackerguide, link_resumedatabase } from "@/utils/Urls";

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
    {
      label: "Resume Database",
      href: link_resumedatabase,
      icon: <FilePersonFill />,
    },
  ];

  return <ButtonGroup buttons={buttons} />;
};

export default LiveButtonGroup;

import { Link } from "@/components/Link";
import { Tier } from "./Types";

export const getTiers = (tier: string) => {
  switch (tier.toLowerCase()) {
    case "pearl":
      return Tier.PEARL;
    case "gold":
      return Tier.GOLD;
    case "silver":
      return Tier.SILVER;
    case "custom":
      return Tier.CUSTOM;
    default:
      throw new Error(`Unknown tier: ${tier}`);
  }
};

export const formatContent = (text: string) => {
  // Split the text into lines
  const lines = text.split("\n");

  // Function to process markdown inline formats
  const processInlineMarkdown = (text: string) => {
    const parts: JSX.Element[] = [];
    let currentText = text;
    let key = 0;

    // Process links - [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let linkMatch;
    let lastIndex = 0;

    while ((linkMatch = linkRegex.exec(currentText)) !== null) {
      // Add text before the link
      if (linkMatch.index > lastIndex) {
        parts.push(
          <span key={key++}>
            {currentText.substring(lastIndex, linkMatch.index)}
          </span>
        );
      }

      // Add the link
      parts.push(<Link href={linkMatch[2]}>{linkMatch[1]}</Link>);

      lastIndex = linkMatch.index + linkMatch[0].length;
    }

    // Add remaining text after the last link
    currentText = currentText.substring(lastIndex);

    // Process bold and italic
    const segments = currentText.split(/(\*\*\*|\*\*|\*)/);
    let isItalic = false;
    let isBold = false;

    segments.forEach((segment, index) => {
      if (segment === "***") {
        isBold = !isBold;
        isItalic = !isItalic;
      } else if (segment === "**") {
        isBold = !isBold;
      } else if (segment === "*") {
        isItalic = !isItalic;
      } else if (segment) {
        parts.push(
          <span
            key={key++}
            className={`${isBold ? "font-bold" : ""} ${
              isItalic ? "italic" : ""
            }`}
          >
            {segment}
          </span>
        );
      }
    });

    return parts;
  };

  return lines.map((line, index) => {
    // Check if line starts with a bullet point
    const isBulletPoint = line.trim().startsWith("-");

    // Process the line content
    let processedLine = line;
    if (isBulletPoint) {
      // Remove the bullet point for styling
      processedLine = line.trim().substring(1).trim();
    }

    // Process markdown in the line
    const formattedContent = processInlineMarkdown(processedLine);

    return isBulletPoint ? (
      <li key={index} className="ml-6 list-disc my-1">
        {formattedContent}
      </li>
    ) : (
      <p key={index} className="my-1">
        {formattedContent}
      </p>
    );
  });
};

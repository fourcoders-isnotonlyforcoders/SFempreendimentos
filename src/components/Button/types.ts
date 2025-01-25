export type ButtonProps = {
  content: string;
  onClick: () => void;
  size?: "small" | "medium" | "large";
};

export type sizeStyleType = {
  padding: string;
  paddingMobile: string;
  fontSize: string;
  fontSizeMobile: string;
};

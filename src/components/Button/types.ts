export type ButtonProps = {
  content: string;
  onClick: () => void;
  size?: "small" | "medium" | "large";
  customStyle?: "default" | "outline";
};

export type sizeStyleType = {
  padding: string;
  paddingMobile: string;
  fontSize: string;
  fontSizeMobile: string;
};

export type styleType = {
  backgroundColor: string;
  color: string;
  border: string;
};

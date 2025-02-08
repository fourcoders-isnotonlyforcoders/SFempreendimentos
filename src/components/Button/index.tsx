import { ButtonComponent } from "./styles";
import { ButtonProps, sizeStyleType, styleType } from "./types";

export const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  size = "medium",
  customStyle = "default"
}) => {
  const sizeStyles: Record<string, sizeStyleType> = {
    small: {
      padding: "1rem 3rem",
      paddingMobile: "0.5rem 1rem",
      fontSize: "1rem",
      fontSizeMobile: "0.5rem"
    },
    medium: {
      padding: "1rem 5rem",
      paddingMobile: "0.8rem 1.5rem",
      fontSize: "1.5rem",
      fontSizeMobile: "1rem"
    },
    large: {
      padding: "1.5rem 7rem",
      paddingMobile: "1rem 2rem",
      fontSize: "2rem",
      fontSizeMobile: "1.5rem"
    }
  };
  const styleStyles: Record<string, styleType> = {
    default: {
      backgroundColor: "third",
      color: "black",
      border: "none"
    },
    outline: {
      backgroundColor: "transparent",
      color: "third",
      border: "1px solid"
    }
  };

  return (
    <ButtonComponent
      onClick={onClick}
      padding={sizeStyles[size]}
      customStyle={styleStyles[customStyle]}
      data-aos="fade-left"
      data-aos-duration="500"
    >
      {content}
    </ButtonComponent>
  );
};

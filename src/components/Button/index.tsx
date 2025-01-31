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
      paddingMobile: "1rem 2rem",
      fontSize: "1.5rem",
      fontSizeMobile: "1rem"
    },
    medium: {
      padding: "1rem 6rem",
      paddingMobile: "1rem 3rem",
      fontSize: "2rem",
      fontSizeMobile: "1.5rem"
    },
    large: {
      padding: "2rem 10rem",
      paddingMobile: "1.5rem 4rem",
      fontSize: "3rem",
      fontSizeMobile: "2.5rem"
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

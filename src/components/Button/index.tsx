import { ButtonComponent } from "./styles";
import { ButtonProps, sizeStyleType } from "./types";

export const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  size = "medium"
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
      paddingMobile: "1.5rem 5rem",
      fontSize: "3rem",
      fontSizeMobile: "2.5rem"
    }
  };

  return (
    <ButtonComponent onClick={onClick} padding={sizeStyles[size]} data-aos="fade-left" data-aos-duration="500" >
      {content}
    </ButtonComponent>
  );
};

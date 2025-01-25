import { ButtonComponent } from "./styles";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({ content, onClick }) => {
  return <ButtonComponent onClick={onClick}>{content}</ButtonComponent>;
};

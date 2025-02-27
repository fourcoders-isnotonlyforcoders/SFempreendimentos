import { Link } from "react-router-dom";
import styled from "styled-components";
export const Logo: React.FC = () => {
  return (
    <Link to={"/"} data-aos="fade-right" data-aos-duration="500">
      <LogoImg src={"./images/SF.svg"} />
    </Link>
  );
};
const LogoImg = styled.img`
  width: 70px;
  height: auto;
  object-fit: cover;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
export const Logo: React.FC = () => {
  return (
    <Link to={"/"} data-aos="fade-right" data-aos-duration="500">
      <LogoImg src={"./images/logo-white-blue.png"} />
    </Link>
  );
};
const LogoImg = styled.img`
  width: 77px;
  height: auto;
`;

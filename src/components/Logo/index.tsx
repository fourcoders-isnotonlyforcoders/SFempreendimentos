import styled from "styled-components";
export const Logo: React.FC = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="500">
      <LogoImg src={"./images/logo-white-blue.png"} />
    </div>
  );
};
const LogoImg = styled.img`
  width: 77px;
  height: auto;
`;

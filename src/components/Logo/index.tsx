import styled from "styled-components";
export const Logo: React.FC = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="500">
      <LogoImg src={"./images/logo.png"} />
    </div>
  );
};
const LogoImg = styled.img`
  width: 100px;
  height: auto;
`;

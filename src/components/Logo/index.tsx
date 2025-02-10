import styled from "styled-components";
export const Logo: React.FC = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="500">
      <LogoImg src={"./sf.png"}/>
    </div>
  );
};
const LogoImg = styled.img`
  width: 100px; 
  height: auto;  
`;
// TODO: Adicionar componente de logo quando IDV estiver pronta

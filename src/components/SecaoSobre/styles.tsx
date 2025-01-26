import styled from "styled-components";

export const SobreContainer = styled.div`
  border: 2px solid blue;
  max-width: 1350px;
  height: auto;
  min-height: 400px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
  align-items: center;
  padding: 0 2.2rem;
`;
export const SobreLeft = styled.div`
  border: 1px solid grey;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  flex-direction: column;
  width: auto;
  max-width: 40%;
  height: auto;
  min-height: 400px;
`;
export const SobreParagraph = styled.p`
  border: 1px solid grey;
  font-size: 18px;
  font-weight: 100;
  line-height: 22px;
  padding: 1rem 2rem 1rem 0;
  color: ${(props) => props.theme.colors.offWhite};
`;
export const SobreButton = styled.button`
  border: 1px solid grey;
  border-radius: 25px;
  width: 77%;
  height: 62px;
  text-align: center;
  color: ${(props) => props.theme.colors. third};
  font-size: 2.2rem;
  font-weight: bold;
  cursor: pointer;
  margin: 10px auto;
`;

export const SobreCenter = styled.div`
  width: 2.2px;
  height: 400px;
  /* background-color: ${(props)=>props.theme.colors.primary}; */
  background: linear-gradient(
    to top,
    transparent 0%, 
    ${(props) => props.theme.colors.primary} 50%, 
    transparent 100%
  );
`;

export const SobreRight = styled.div`
  border: 1px solid red;
  width: auto;
  max-width: 50%;
  height: 100%;
`;
export const SobreImg = styled.img`
  height: 500px;
  width: auto;
`;

import styled from "styled-components";
import { Carrousel } from "./Carrousel";
const Container = styled.section`
border: 2px solid gold;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`;

export const NewSection = () => {
  return (
    <Container>
      <Carrousel/>
    </Container>
  )
}

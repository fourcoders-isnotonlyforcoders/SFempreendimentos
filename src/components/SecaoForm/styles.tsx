import styled from "styled-components";

export const SecaoFormContainer = styled.section`
  height: 100%;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
  padding: 1rem 0;
  width: auto;
  max-width: 70%;
  margin: 0 auto;
`;

export const FormNameContainer = styled.div`
  position: relative;
  width: auto;
  min-width: 300px;
  margin: 4rem 0 0 0;
  flex: 1 1 100%;
`;

export const FormInfosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin-top: 20px;

  @media only screen and (max-width: 1180px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NameInput = styled.input`
  font-size: 1.8rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.complementaryblue};
  background: transparent;
  color: ${(props) => props.theme.colors.primaryblue};

  &::placeholder {
    color: transparent;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.primaryblue};
  }

  &:focus ~ label,
  &:not(&:placeholder-shown) ~ label,
  &:valid ~ label {
    top: -22px;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.primaryblue};
  }

  &:focus ~ .bar:before,
  &:focus ~ .bar:after {
    width: 50%;
  }
`;

export const NameTitle = styled.label`
  color: ${(props) => props.theme.colors.complementaryblue};
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  left: 5px;
  top: 10px;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease, opacity 0.5s,
    transform 0.5s !important;
  pointer-events: none;
`;

export const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;

  &::before,
  &::after {
    content: "";
    height: 2px;
    width: 0;
    position: absolute;
    background: ${(props) => props.theme.colors.complementaryblue};
    transition: 0.2s ease all;
  }

  &::before {
    left: 50%;
  }

  &::after {
    right: 50%;
  }
`;

export const FormTextContainer = styled.div`
  margin-top: 22px;
  width: auto;
  min-width: 100%;
  textarea {
    width: 100%;
    padding: 1rem;
    font-size: 1.8rem;
    border: 2px solid ${(props) => props.theme.colors.complementaryblue};
    border-radius: 4px;
    resize: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.secundaryblue};
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.complementaryblue};
  }
  textarea:focus {
    border: 2px solid ${(props) => props.theme.colors.primaryblue};
  }
`;

export const FormButton = styled.button`
  border: 2px solid ${(props) => props.theme.colors.fourth};
  padding: 2rem 0;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryblue};
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: radial-gradient(circle, rgba(0, 123, 231, 0.11), rgba(80, 150, 255, 0.22)) ;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
    transform: scale(1.03) !important;
    background: radial-gradient(circle, rgba(0, 123, 231, 0.22), rgba(80, 150, 255, 0.44)) ;
  }
`;

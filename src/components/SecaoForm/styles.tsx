import styled from "styled-components";

export const SecaoFormContainer = styled.section`
  height: 100%;
  padding: 10rem 8rem;
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  font-family: 'Montserrat';

  @media (max-width: 1024px) {
    padding: 5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 5rem 1rem;
    height: auto;
  }
  
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.2rem;
  padding: 1rem 4rem 4rem 8rem;
  width: 100%; 
  max-width: 50%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 22px;
  margin-left: -4rem;

  @media (max-width: 1024px) {
    max-width: 90%; 
    margin-left: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem 2rem 4rem 2rem;
  }
`;

export const FormNameContainer = styled.div`
  position: relative;
  width: 100%; 
  text-align: center; 

  @media (max-width: 906px) {
    max-width: 100%;
  }
`;

export const FormInfosContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media (max-width: 1180px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const NameInput = styled.input`
  padding: 1.8rem 4rem 1.8rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  border-radius: 8px;
  background: #000312;
  color: ${(props) => props.theme.colors.white} !important;
  font-family: 'Montserrat';

  &::placeholder {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.white};
    transition: opacity 0.3s ease; 
  }

  &:focus::placeholder {
    opacity: 0; 
  }
`;



export const FormTextContainer = styled.div`
  margin-top: 2rem;
  width: auto;
  min-width: 100%;
  font-family: 'Montserrat';
  textarea {
    width: 100%;
    padding: 2rem;
    font-family: 'Montserrat';
    font-size: 1.6rem;
    border-radius: 20px;
    resize: none;
    outline: none;
    background: #000312;
    color: ${(props) => props.theme.colors.white} !important;
    transition: all 0.3s ease !important;
  }
  ::placeholder {
    color: ${(props) => props.theme.colors.white};
    transition: color 0.3s !important;
  }
  textarea:focus {
    color: ${(props) => props.theme.colors.white};
  }
  textarea:focus::placeholder {
    color: ${(props) => props.theme.colors.white};
    opacity: 0;
  }
`;

export const FormButton = styled.button`
  padding: 2.2rem 0;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primaryBlue};
  margin-top: 2rem;
  transition: background-color 0.3s, transform 0.3s, opacity 0.5s, transform 0.5s !important;
  &:hover {
    color: ${(props) => props.theme.colors.black};
    transform: scale(1.03) !important;
  }
`;

export const SelectsContainer = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;
`;

export const PrimarySelect = styled.select`
  padding: 1.8rem 4rem 1.8rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: #000312;
  font-family: 'Montserrat';
  font-size: 1.6rem;
  border: 2px solid ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white} !important;
  &::placeholder{
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Option = styled.option`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.secondaryBlue} !important; 
  padding: 1rem;
  background-color: #000312 !important;
  cursor: pointer !important;

  &:focus {
    border-color: ${(props) => props.theme.colors.primaryBlue};
    outline: none;
  }
  &:valid {
    color: ${(props) => props.theme.colors.primaryBlue}; 
  }
`; 

export const SecaoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0 0;
`;

export const FormImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  cursor: inherit;
  border-radius: 22px;
  transition: transform 0.3s ease;
  transition: box-shadow 0.3s ease, filter 0.3s ease, opacity 0.5s,
    transform 0.5s !important;
  box-shadow: 0 7px 10px 7px rgba(0, 18, 85, 0.11);
  object-fit: fill;
  z-index: 10;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    filter: brightness(1.1);
  }

  @media (max-width: 1024px) {
    display: none;
  }

`


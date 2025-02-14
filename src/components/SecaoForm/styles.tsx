import styled from "styled-components";

export const SecaoFormContainer = styled.section`
  height: 100%;
  padding: 10rem 2rem;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.2rem;
  padding: 1rem 4rem 8rem 4rem;
  width: auto;
  max-width: 70%;
  margin: 2rem auto;
  border: 2px solid ${(props) => props.theme.colors.secondaryBlue};
  border-radius: 12px;
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
  border-bottom: 2px solid ${(props) => props.theme.colors.secondaryBlue};
  border-radius: 4px;
  background: transparent;
  color: ${(props) => props.theme.colors.primaryBlue};

  &::placeholder {
    color: transparent;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.primaryBlue};
  }

  &:focus ~ label,
  &:not(&:placeholder-shown) ~ label,
  &:valid ~ label {
    top: -22px;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.primaryBlue};
  }

  &:focus ~ .bar:before,
  &:focus ~ .bar:after {
    width: 50%;
  }
`;

export const NameTitle = styled.label`
  color: ${(props) => props.theme.colors.secondaryBlue};
  font-size: 1.6rem;
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
    background: ${(props) => props.theme.colors.secondaryBlue};
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
  margin-top: 2rem;
  width: auto;
  min-width: 100%;
  textarea {
    width: 100%;
    padding: 2rem;
    font-size: 1.8rem;
    border: 2px solid ${(props) => props.theme.colors.secondaryBlue};
    border-radius: 8px;
    resize: none;
    outline: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.primaryBlue};
  }

  ::placeholder {
    color: ${(props) => props.theme.colors.secondaryBlue};
  }
  textarea:focus {
    border: 2px solid ${(props) => props.theme.colors.primaryBlue};
  }
`;

export const FormButton = styled.button`
  border: 2px solid ${(props) => props.theme.colors.fourth};
  padding: 2rem 0;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryBlue};
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: radial-gradient(
    circle,
    rgba(0, 123, 231, 0.11),
    rgba(80, 150, 255, 0.22)
  );
  margin-top: 2rem;
  &:hover {
    border: 2px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
    transform: scale(1.03) !important;
    background: radial-gradient(
      circle,
      rgba(0, 123, 231, 0.22),
      rgba(80, 150, 255, 0.44)
    );
  }
`;

export const SelectsContainer = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;
`;

export const PrimarySelect = styled.select`
  background: none;
  color: ${(props) => props.theme.colors.secondaryBlue} !important;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors.secondaryBlue};
  padding: 2rem 1rem;
  font-size: 1.6rem;
  width: 100%;
  border-radius: 4px;
  outline: none; 
  transition: border-color 0.3s ease;
  cursor: pointer;

  &:focus {
    border-color: ${(props) => props.theme.colors.primaryBlue};
    outline: none;
  }
  &:valid {
    color: ${(props) => props.theme.colors.primaryBlue}; 
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



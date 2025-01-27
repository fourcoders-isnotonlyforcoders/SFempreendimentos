import React from 'react';
import { NameInput, NameTitle, Bar, FormNameContainer } from './styles';

type InputFieldProps = {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel'; 
  required?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({ id, label, type, required }) => {
  return (
    <FormNameContainer>
      <NameInput required={required} type={type} id={id} placeholder=" " />
      <NameTitle htmlFor={id}>{label}</NameTitle>
      <Bar />
    </FormNameContainer>
  );
};

export default InputField;

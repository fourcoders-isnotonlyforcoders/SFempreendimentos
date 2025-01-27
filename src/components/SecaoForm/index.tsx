import React from 'react';
import { TituloSecao } from "../TituloSecao";
import { FormContainer, SecaoFormContainer, FormInfosContainer, FormNameContainer, FormTextContainer, FormButton } from "./styles";
import InputField from './InputField';

export const SecaoForm: React.FC = () => {
  return (
    <SecaoFormContainer>
      <TituloSecao
        titulo="Vamos concretizar seu próximo grande projeto ?"
        preTitulo="CONTATO"
        align="center"
        color="white"
      />
      <FormContainer>
        <FormNameContainer>
          <InputField id="fullName" label="Nome Completo:" type="text" required />
        </FormNameContainer>
        <FormInfosContainer>
          <InputField id="email" label="Email" type="email" required />

          <InputField id="phone" label="Telefone" type="tel" required />
        </FormInfosContainer>
        <FormTextContainer>
          <textarea
            id="additionalInfo"
            placeholder="Descreva brevemente sobre seu projeto:"
            rows={11} 
          />
        </FormTextContainer>
        <FormButton type='submit'> ENVIAR
        </FormButton>
      </FormContainer>
    </SecaoFormContainer>
  );
};

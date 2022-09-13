import AuthForm from "../components/AuthForm";
import styled from "styled-components";
import React from "react";

const StyledSection = styled.section`
  position: absolute;
  padding: 1rem;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Auth = () => {
  return (
    <StyledSection>
      <AuthForm />
    </StyledSection>
  );
};

export default Auth;

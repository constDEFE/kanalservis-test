import { setLogin, setPassword, signIn } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { devices } from "../utils/resolutions";
import styled from "styled-components";

const Form = styled.form`
  margin: 0 auto;
  margin-top: 1.5rem;
  min-height: 330px;
  font-size: 24px;
  width: 100%;
  max-width: 480px;
  padding: 0.75rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px solid #27569c;
  border-radius: 6px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  gap: 0.65rem;

  @media ${devices.tablet} {
    padding-left: 14px;
    padding-right: 14px;
    gap: 24px;
  }
`;

const Title = styled.h1`
  color: #27569c;
  text-align: center;
  line-height: 1.75rem;
  font-size: 24px;

  @media ${devices.tablet} {
    padding-top: 30px;
    padding-bottom: 22px;
  }
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${devices.tablet} {
    gap: 24px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: full;
  justify-content: space-between;

  @media ${devices.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;

const Input = styled.input`
  font-size: 18px;
  width: full;
  max-width: 295px;
  height: 40px;
  padding-right: 8px;
  padding-left: 8px;
  border: 4px solid #27569c;
  background: #d9d9d9;
  border-radius: 10px;

  @media ${devices.tablet} {
    height: 45px;
  }
`;

const Button = styled.button`
  font-size: 24px;
  padding: 0.5rem 4rem;
  background: #d4b062;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const Error = styled.p`
  width: 100%;
  padding: 0.25rem 1rem;
  text-align: center;
  font-size: 16px;
  background: #f0b4b4;
  color: red;
  border: 2px solid red;
`;

const AuthForm = () => {
  const { login, password, user } = useSelector((state) => state.auth);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (event) => dispatch(setLogin(event.target.value));
  const handlePassword = (event) => dispatch(setPassword(event.target.value));

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    if (login === "test" && password === "test") {
      dispatch(signIn());
      dispatch(setLogin(""));
      dispatch(setPassword(""));

      navigate("/");
    } else {
      setError("Wrong login or password.");
      dispatch(setPassword(""));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Autorization</Title>
      {error && <Error>{error}</Error>}
      <Inputs>
        <InputContainer>
          <label htmlFor="login">login</label>
          <Input
            value={login}
            onChange={handleLogin}
            type="text"
            name="login"
            id="login"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">password</label>
          <Input
            value={password}
            onChange={handlePassword}
            type="password"
            name="password"
            id="password"
          />
        </InputContainer>
      </Inputs>
      <Button>Submit</Button>
    </Form>
  );
};

export default AuthForm;

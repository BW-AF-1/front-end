import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 18%;
  padding: 0.5em;
  font-size: 1em;
  border-radius: 10px;
  &:hover {
    background: black;
    color: white;
  }
`;
const Name = styled.div`
  width: 100%;
`;

const Password = styled.div`
  width: 100%;
`;
const LogIn = styled.div`
  width: 100%;
`;
const InputName = styled.input`
  width: 20%;
  padding: 0.5em;
  font-size: 1em;
  border-radius: 10px;
`;
const InputPassword = styled.input`
  width: 20%;
  padding: 0.5em;
  font-size: 1em;
  border-radius: 10px;
`;

const Greet = styled.div`
  background: #ff9233;
  width: 100%;
  height: 5%;
  color: white;
  font-size: 1.5em;
  padding: 1em;
`;

export {
  Greet,
  Container,
  Name,
  Password,
  LogIn,
  InputName,
  InputPassword,
  Input,
};

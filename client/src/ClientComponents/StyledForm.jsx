import styled from "styled-components";

const Input = styled.input`
  width: 100%;
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
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  border-radius: 10px;
`;
const InputPassword = styled.input`
  width: 100%;
  padding: 0.5em;
  font-size: 1em;
  border-radius: 10px;
`;

export { Name, Password, LogIn, InputName, InputPassword, Input };

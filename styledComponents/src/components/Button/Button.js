import styled from "styled-components";

export const Button = styled.TouchableOpacity`
  background-color: green;
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px;
  height: 80px;
  width: 300px;
  justify-content: center;
  align-items: center;
`;

export const ButtonDecremento = styled(Button)`
  background-color: red;
`;

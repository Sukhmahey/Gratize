import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

const TextInputContainer = styled(TextInput)`
  height: ${(props) => props.theme.sizes[2]};
  border-bottom-color: #b9b9b9;
  border-bottom-width: 1px;
  font-size: ${(props) => props.theme.fontSizes.body};
  flex: 1;
`;

export const InputText = (props) => {
  return <TextInputContainer {...props}></TextInputContainer>;
};

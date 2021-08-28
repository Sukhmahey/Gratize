import styled from "styled-components/";
import { Text, View, TouchableOpacity } from "react-native";

export const Header = styled.View`
  flex: 5;
  align-items: center;
  justify-content: center;
`;
export const Footer = styled.View`
  flex: 8;
  padding: ${(props) => props.theme.space[3]};
`;
export const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h4};
`;
export const InputHeading = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.button};
`;
export const EmailContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const PasswordContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ErrorText = styled(Text)`
  color: red;
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const CaptionText = styled(Text)`
  color: #3a3a3a;
  font-size: ${(props) => props.theme.fontSizes.button};
`;
export const Link = styled(Text)`
  color: blue;
  font-size: ${(props) => props.theme.fontSizes.button};
`;
export const LinkContainer = styled.View`
  flex-direction: row;
`;
export const ButtonContainer = styled.View`
  flex: 4;
`;
export const InputContainer = styled.View`
  flex: 5;
`;

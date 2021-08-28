import styled from "styled-components/native";
import { Text } from "react-native";
export const Header = styled.View`
  flex: 3;
`;

export const ContentContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 4;
`;

export const Footer = styled.View`
  flex: 5;
`;

export const Title = styled(Text)`
  color:#FEC260
  font-size: ${(props) => props.theme.fontSizes.h4};
`;

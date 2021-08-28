import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { SafeArea } from "../../../components/SafeArea.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/Spacer.component";
import { ButtonContainer } from "../../signup/screen/signup.style";
import { Header, ContentContainer, Title, Footer } from "./welcome.style";

export const Welcome = ({ navigation }) => {
  return (
    <SafeArea>
      <Header />
      <ContentContainer>
        <Title>Welcome</Title>
        <Title>To</Title>
        <Title>GRATIZE</Title>
        <Spacer positiontype="bottom" size="large" />
        <Spacer positiontype="bottom" size="large" />
        <Spacer positiontype="bottom" size="large" />
        <ButtonContainer>
          <Button
            mode="contained"
            color="#FEC260"
            onPress={() => navigation.navigate("SignIn")}
          >
            Back to SignIN
          </Button>
        </ButtonContainer>
      </ContentContainer>
      <Footer />
    </SafeArea>
  );
};

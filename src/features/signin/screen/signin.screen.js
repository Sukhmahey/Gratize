import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/SafeArea.component";

import { InputText } from "../../../components/TextInput.component";
import { Spacer } from "../../../components/Spacer.component";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import {
  ButtonContainer,
  Header,
  Footer,
  InputContainer,
  EmailContainer,
  PasswordContainer,
  LinkContainer,
  Title,
  ErrorText,
  InputHeading,
  CaptionText,
  Link,
} from "../../signup/screen/signup.style";

export const SignIn = ({ navigation }) => {
  const [emailText, setEmailText] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordText, setPasswordText] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const EmailValidation = () => {
    if (emailText == "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const PasswordValidation = () => {
    if (passwordText == "") {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };
  const ToggleShowPassword = () => {
    if (showPassword == true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };
  const onSignIn = () => {
    if (emailText !== "" && passwordText !== "") {
      navigation.navigate("Welcome");
    } else {
      Alert.alert(
        "Invalid Credentials",
        "Email or Password is empty or invalid",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
    }
  };

  return (
    <SafeArea>
      <Header>
        <Title>GRATIZE</Title>
      </Header>
      <Footer>
        <InputContainer>
          <InputHeading>Email</InputHeading>
          <EmailContainer>
            <InputText
              placeholder="Eg- xyz@gmail.com"
              onEndEditing={() => EmailValidation()}
              onChangeText={(text) => {
                setEmailText(text);
              }}
              value={emailText}
            ></InputText>
            <MaterialIcons
              name="done"
              size={24}
              color={emailText == "" ? "grey" : "green"}
            />
          </EmailContainer>
          <Spacer positiontype="bottom" size="small" />
          {emailError == true ? (
            <ErrorText>Email is empty or invalid</ErrorText>
          ) : null}
          <Spacer positiontype="bottom" size="large" />
          <InputHeading>Password</InputHeading>
          <PasswordContainer>
            <InputText
              placeholder="Eg- name@number"
              secureTextEntry={showPassword}
              onEndEditing={PasswordValidation}
              onChangeText={(text) => {
                setPasswordText(text);
              }}
              value={passwordText}
            ></InputText>
            {showPassword == false ? (
              <TouchableOpacity onPress={ToggleShowPassword}>
                <Ionicons name="eye" size={24} color={"black"} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={ToggleShowPassword}>
                <Ionicons name="eye-off" size={24} color={"grey"} />
              </TouchableOpacity>
            )}
          </PasswordContainer>
          <Spacer positiontype="bottom" size="small" />
          {passwordError == true ? (
            <ErrorText>Password is empty or invalid</ErrorText>
          ) : null}
          <Spacer positiontype="bottom" size="large" />
          <LinkContainer>
            <CaptionText>Did not have any account? </CaptionText>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Link>SignUp</Link>
            </TouchableOpacity>
          </LinkContainer>
        </InputContainer>
        <ButtonContainer>
          <Button mode="contained" color="#FEC260" onPress={onSignIn}>
            SignIn
          </Button>
        </ButtonContainer>
      </Footer>
    </SafeArea>
  );
};

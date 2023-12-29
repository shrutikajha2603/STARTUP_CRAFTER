import React, { useState } from "react";
import { Formik } from "formik";
import { ActivityIndicator, Pressable, Text, View, KeyboardAvoidingView, Keyboard, ScrollView, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

const { success, fail } = { success: '#22C55E', fail: '#EF4444' };
const StyledView = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 30px;
  background-color: #222831;
`;

const KeyboardAvoidingContainer = (props) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "transparent" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={60}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable onPress={Keyboard.dismiss}>{props.children}</Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const LoginButton = styled.TouchableOpacity`
  background-color: #00adb5;
  padding: 15px;
  align-items: center;
  border-radius: 5px;
`;

const LoginButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

const StyledPressable = styled.Pressable`
    padding-vertical: 5px;
    align-self: center;
`;

const PressableText = (props) => {
  return <StyledPressable onPress={props.onPress} {...props}>
    <Text style={{ color: "#00ADB5" }}>{props.children}</Text>
  </StyledPressable>;
}

const StyledText = styled.Text`
    font-size: 13px;
    color: ${(props) => (props.success ? success : fail)};
    text-align: center;
`

const MsgBox = (props) => {
  return <StyledText>{props.children}</StyledText>;
}

const InputField = styled.TextInput`
    background-color: #222831;
    padding: 15px;
    padding-left: 65px;
    padding-right: 55px;
    border-radius: 10px;
    font-size: 16px;
    height: 55px;
    margin-top: 13px;
    margin-bottom: 10px;
    color: #FFFFFF;
    border-color: #393E46;
    border-width: 2px;
`;

const LeftIcon = styled.View`
    position: absolute;
    top: 32px;
    left: 15px;
    z-index: 1;
`

const RightIcon = styled.TouchableOpacity`
    position: absolute;
    top: 32px;
    right: 15px;
    z-index: 1;
    border-color: #393E46;
    padding-right: 10px;
`

const StyledTextInput = ({ icon, Label, isPassword, ...props }) => {
  const [inputBackgroundColor, setInputBackgroundColor] = useState('#222831');

  const [hidePassword, setHidePassword] = useState(true);

  const customOnBlur = () => {
    props?.onBlur;
    setInputBackgroundColor('#222831');
  }

  const customOnFocus = () => {
    props?.onFocus;
    setInputBackgroundColor('#393E46');
  }

  return (
    <View>
      <LeftIcon>
        <MaterialCommunityIcons name={icon} size={30} color="#00ADB5" style={{ marginTop: 10 }} />
      </LeftIcon>
      <Text style={{ color: 'white' }}>{Label}</Text>
      <InputField
        {...props}
        placeholderTextColor={'#6B7280'}
        style={{ backgroundColor: inputBackgroundColor, ...props?.style }}
        onBlur={customOnBlur}
        onFocus={customOnFocus}
        secureTextEntry={isPassword && hidePassword}
      />
      {isPassword && <RightIcon onPress={() => {
        setHidePassword(!hidePassword);
      }}>
        <MaterialCommunityIcons name={hidePassword ? 'eye-off' : 'eye'} size={20} color="white" style={{ marginTop: 13 }} />
      </RightIcon>}
    </View>)
}

const Login = () => {
  const [message, setMessage] = useState("");
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const handleLogin = async (credentials, setSubmitting) => {
    try {
      setMessage(null);
      //call backend
      //move to the next page
      setSubmitting(false);
    } catch (error) {
      setMessage("Login Failed: " + error.message);
      setSubmitting(false);
    }
  };

  return (
    <StyledView>
      <KeyboardAvoidingContainer>
        <Text
          style={{ marginTop: 51, marginBottom: 5, fontSize: 30, color: "white", fontWeight: "bold", alignSelf: "center" }}>
          Welcome Back
        </Text>
        <Text
          style={{ fontSize: 15, color: "white", alignSelf: "center", marginBottom: 40 }}>
          We Missed You
        </Text>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.email == "" || values.password == "") {
              setMessage("Please fill in all fields");
              setSubmitting(false);
            } else {
              handleLogin(values, setSubmitting);
            }
          }}
        >
          {({
            handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
              <>
                <StyledTextInput
                  Label="Email Address"
                  icon="email-variant"
                  placeholder="youremail@gmail.com"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  style={{ marginBottom: 20 }}
                />

                <StyledTextInput
                  Label="Password"
                  icon="lock-open"
                  placeholder="********"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  isPassword={true}
                  style={{ marginBottom: 25 }}
                />
                <MsgBox style={{ marginBottom: 25 }} success={isSuccessMessage}>
                  {message || " "}
                </MsgBox>

                {!isSubmitting && (
                  <LoginButton onPress={handleSubmit}>
                    <LoginButtonText>Login</LoginButtonText>
                  </LoginButton>
                )}

                {isSubmitting && (
                  <LoginButton disabled={true}>
                    <ActivityIndicator size="small" color="black" />
                  </LoginButton>
                )}
                <PressableText
                  onPress={() => { }}
                >
                  New account sign up
                </PressableText>
                <PressableText onPress={() => { }}>Forgot Password</PressableText>
                <Text
                  style={{
                    textAlign: "center", marginTop: 10, marginBottom: 10, color: "white", fontSize: 15 }}
                >
                  Or continue with
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.5 : 1,
                      },
                    ]}
                    onPress={() => {
                      // Handle Google signup
                    }}
                  >
                    <MaterialCommunityIcons
                      name="google" size={30} color="#FF3D00"
                    />
                  </Pressable>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.5 : 1,
                      },
                    ]}
                    onPress={() => {
                      // Handle Apple signup
                    }}
                  >
                    <MaterialCommunityIcons
                      name="apple" size={30} color="#ffffff" style={{ paddingLeft: 10 }}
                    />
                  </Pressable>
                  <Pressable
                    style={({ pressed }) => [
                      {
                        opacity: pressed ? 0.5 : 1,
                      },
                    ]}
                    onPress={() => {
                      // Handle Meta signup
                    }}
                  >
                    <MaterialCommunityIcons
                      name="facebook" size={30} color="#1877F2" style={{ paddingLeft: 10 }}
                    />
                  </Pressable>
                </View>
              </>
            )}
        </Formik>
      </KeyboardAvoidingContainer>
    </StyledView>
  );
};

export default Login;

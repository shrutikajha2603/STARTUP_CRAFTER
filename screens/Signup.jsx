import React, { useState } from "react";
import { Formik } from "formik";
import {
  ActivityIndicator,
  Pressable,
  Text,
  View,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

const { success, fail } = { success: "#22C55E", fail: "#EF4444" };
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

const SignUpButton = styled.TouchableOpacity`
  background-color: #00adb5;
  padding: 15px;
  align-items: center;
  border-radius: 5px;
`;

const SignUpButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

const StyledPressable = styled.Pressable`
  padding-vertical: 5px;
  align-self: center;
`;

const PressableText = (props) => {
  return (
    <StyledPressable onPress={props.onPress} {...props}>
      <Text style={{ color: "#00ADB5" }}>{props.children}</Text>
    </StyledPressable>
  );
};

const StyledText = styled.Text`
  font-size: 13px;
  color: ${(props) => (props.success ? success : fail)};
  text-align: center;
`;

const MsgBox = (props) => {
  return <StyledText>{props.children}</StyledText>;
};

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
  color: #ffffff;
  border-color: #393e46;
  border-width: 2px;
`;

const LeftIcon = styled.View`
  position: absolute;
  top: 30px;
  left: 15px;
  z-index: 1;
`;

const RightIcon = styled.TouchableOpacity`
  position: absolute;
  top: 32px;
  right: 15px;
  z-index: 1;
  border-color: #393e46;
  padding-right: 10px;
`;

const StyledTextInput = ({ icon, Label, isPassword, ...props }) => {
  const [inputBackgroundColor, setInputBackgroundColor] = useState("#222831");

  const [hidePassword, setHidePassword] = useState(true);

  const customOnBlur = () => {
    props?.onBlur;
    setInputBackgroundColor("#222831");
  };

  const customOnFocus = () => {
    props?.onFocus;
    setInputBackgroundColor("#393E46");
  };

  return (
    <View>
      <LeftIcon>
        <MaterialCommunityIcons
          name={icon}
          size={30}
          color="#00ADB5"
          style={{ marginTop: 10 }}
        />
      </LeftIcon>
      <Text style={{ color: "white" }}>{Label}</Text>
      <InputField
        {...props}
        placeholderTextColor={"#6B7280"}
        style={{ backgroundColor: inputBackgroundColor, ...props?.style }}
        onBlur={customOnBlur}
        onFocus={customOnFocus}
        secureTextEntry={isPassword && hidePassword}
      />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <MaterialCommunityIcons
            name={hidePassword ? "eye-off" : "eye"}
            size={20}
            color="white"
            style={{ marginTop: 13 }}
          />
        </RightIcon>
      )}
    </View>
  );
};

const SignUp = () => {
  const [message, setMessage] = useState("");
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const handleSignup = async (credentials, setSubmitting) => {
    try {
      setMessage(null);
      // call backend
      // move to the next page
      setSubmitting(false);
    } catch (error) {
      setMessage("Signup Failed: " + error.message);
      setSubmitting(false);
    }
  };

  return (
    <StyledView>
      <KeyboardAvoidingContainer>
        <Text
          style={{
            marginTop: 51,
            marginBottom: 20,
            fontSize: 30,
            color: "white",
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          Get Started Free
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "white",
            alignSelf: "center",
            marginBottom: 40,
          }}
        >
          Free Forever. No Credit Card Needed
        </Text>

        <Formik
          initialValues={{
            email: "",
            fullName: "",
            password: "",
            confirmpassword: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            if (
              values.email == "" ||
              values.password == "" ||
              values.fullName == "" ||
              values.confirmpassword == ""
            ) {
              setMessage("Please fill in all fields");
              setSubmitting(false);
            }
            // else if (values.password !== values.confirmpassword) {
            //   setMessage("Passwords do not match");
            //   setSubmitting(false);
            // }
            else {
              handleSignup(values, setSubmitting);
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
          }) => (
            <>
              <StyledTextInput
                Label="Full Name"
                icon="account"
                placeholder="Name"
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
                style={{ marginBottom: 25, alignItems: "center" }}
              />
              <StyledTextInput
                Label="Email Address"
                icon="email-variant"
                placeholder="abc@gmail.com"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                style={{ marginBottom: 25 }}
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
              {/* <StyledTextInput
                Label="Confirm Password"
                icon="lock-open"
                placeholder="********"
                onChangeText={handleChange("confirmpassword")}
                onBlur={handleBlur("confirmpassword")}
                value={values.confirmpassword}
                isPassword={true}
                style={{ marginBottom: 15 }}
              /> */}
              <MsgBox style={{ marginBottom: 25 }} success={isSuccessMessage}>
                {message || " "}
              </MsgBox>
              {!isSubmitting && (
                <SignUpButton onPress={handleSubmit}>
                  <SignUpButtonText>Signup</SignUpButtonText>
                </SignUpButton>
              )}
              {isSubmitting && (
                <SignUpButton disabled={true}>
                  <ActivityIndicator size="small" color="black" />
                </SignUpButton>
              )}
              <PressableText
                style={{ paddingVertical: 15 }}
                onPress={() => {}}
              >
                Sign in to an existing account
              </PressableText>

              <Text
                style={{
                  textAlign: "center",
                  marginTop: 10,
                  marginBottom: 10,
                  color: "white",
                  fontSize: 13,
                }}
              >
                Or Signup with
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
                    name="google"
                    size={30}
                    color="#FF3D00"
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
                    name="apple"
                    size={30}
                    color="#FFFFFF"
                    style={{ paddingLeft: 10 }}
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
                    name="facebook"
                    size={30}
                    color="#1877F2"
                    style={{ paddingLeft: 10 }}
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

export default SignUp;

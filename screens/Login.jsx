import React, { useState } from "react";
import { Formik } from "formik";
import { ActivityIndicator, Pressable, Text, View, KeyboardAvoidingView, Keyboard, ScrollView, Platform, TextInput, Image } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = {
  view: {
    flex: 1,
    padding: 25,
    paddingTop: 30,
    backgroundColor: '#222831',
  },
  keyboardAvoidingContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
  scrollView: {
    flex: 1,
  },
  pressableContainer: {
    flex: 1,
  },
  loginButton: {
    backgroundColor: '#00adb5',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  pressable: {
    paddingVertical: 5,
    alignSelf: 'center',
  },
  pressableText: {
    color: '#00ADB5',
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
  },
  successText: {
    color: '#22C55E',
  },
  failText: {
    color: '#EF4444',
  },
  inputField: {
    backgroundColor: '#222831',
    padding: 15,
    paddingLeft: 65,
    paddingRight: 55,
    borderRadius: 10,
    fontSize: 16,
    height: 55,
    marginTop: 13,
    marginBottom: 10,
    color: '#FFFFFF',
    borderColor: '#393E46',
    borderWidth: 2,
  },
  leftIcon: {
    position: 'absolute',
    top: 32,
    left: 15,
    zIndex: 1,
  },
  rightIcon: {
    position: 'absolute',
    top: 32,
    right: 15,
    zIndex: 1,
    borderColor: '#393E46',
    paddingRight: 10,
  },
};

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
    <View style={styles.view}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={60}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <Pressable
            style={styles.pressableContainer}
            onPress={Keyboard.dismiss}
          >
            <Image source={require('../assets/loginimg.png')} style={{width:300, height:100}} />
            {/* <Image source={{uri: '../assets/loginimg.png'}}style={{width: 40, height: 40}}/> */}
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
                    <View>
                      <View style={styles.leftIcon}>
                        <MaterialCommunityIcons name="email-variant" size={30} color="#00ADB5" style={{ marginTop: 10 }} />
                      </View>
                      <Text style={{ color: 'white' }}>Email Address</Text>
                      <TextInput
                        style={{
                          ...styles.inputField,
                          backgroundColor: values.inputBackgroundColor,
                          marginBottom: 20,
                        }}
                        placeholderTextColor={'#6B7280'}
                        onBlur={handleBlur("email")}
                        onFocus={handleChange("email")}
                        value={values.email}
                      />
                    </View>

                    <View>
                      <View style={styles.leftIcon}>
                        <MaterialCommunityIcons name="lock-open" size={30} color="#00ADB5" style={{ marginTop: 10 }} />
                      </View>
                      <Text style={{ color: 'white' }}>Password</Text>
                      <TextInput
                        style={{
                          ...styles.inputField,
                          backgroundColor: values.inputBackgroundColor,
                          marginBottom: 25,
                        }}
                        placeholderTextColor={'#6B7280'}
                        onBlur={handleBlur("password")}
                        onFocus={handleChange("password")}
                        value={values.password}
                        secureTextEntry={true}
                      />
                    </View>
                    <Text style={{ ...styles.text, marginBottom: 25, ...(isSuccessMessage ? styles.successText : styles.failText) }}>
                      {message || " "}
                    </Text>

                    {!isSubmitting && (
                      <Pressable style={styles.loginButton} onPress={handleSubmit}>
                        <Text style={styles.loginButtonText}>Login</Text>
                      </Pressable>
                    )}

                    {isSubmitting && (
                      <Pressable style={styles.loginButton} disabled={true}>
                        <ActivityIndicator size="small" color="black" />
                      </Pressable>
                    )}

                    <Text style={{color: '#00ADB5'}} onPress={() => { }}>
                      New account sign up
                    </Text>
                    <Text style={{color: '#00ADB5'}} onPress={() => { }}>Forgot Password</Text>
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
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { RadioButton,  } from 'react-native-paper';

export default function IdeaUploaded() {
    const [value, setValue] = React.useState('first');

    return (
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View>
          <Text>1First</Text>
          <RadioButton value="first" />
        </View>
        <View>
          <Text>2. Second</Text>
          <RadioButton value="second" />
        </View>
      </RadioButton.Group>
    );

}

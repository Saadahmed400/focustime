import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 110,
  ...props
}) => {
  return (
      
      <TouchableOpacity style={[styles(size).radius, style]}> 
    <Text 
        style={[styles(size).text, textStyle]} 
        onPress={props.onPress}>
            {props.title}
    </Text> 
</TouchableOpacity>
);
};
const styles = (size) =>
  StyleSheet.create({
    radius: {
    
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      borderColor: '#fff',
      borderWidth: 3,
      justifyContent:"center"

},
    text: {
      color: '#fff',
      fontSize: 25,
      alignContent:"center",
      justifyContent:"center",
      fontWeight:"bold",
    },
  });
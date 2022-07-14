import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../component/RoundedButton';
import { fontSizes, spacing } from '../../utlies/Sizes';
export const First = ({addSubject}) => {
  const [tmpItem , setTmpitem] = useState(null)
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> What would u like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{ flex: 1, marginRight: spacing.md }} 
          onSubmitEditing={ 
            ({nativeEvent})=> {
              setTmpitem 
              (nativeEvent.text)}} />
          <RoundedButton size={50} title="+" 
          onPress={()=> {addSubject(tmpItem)}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  titleContainer:{
    flex: 0.5,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems:"center",
    },
});

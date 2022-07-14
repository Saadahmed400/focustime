import React from 'react'; //USestate will track what we are going to start
import { View, StyleSheet,} from 'react-native';
import {RoundedButton} from '../../component/RoundedButton';

export const Timings = ({ onChangeTime}) => {
  return (
    <>
    <View style={styles.timingButton}>
    <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
    </View>
    <View style={styles.timingButton}>
    <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
    </View>
    
    <View style={styles.timingButton}>
    <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
    </View>
    </>
  )
} 
const styles= StyleSheet.create ({
    timingButton:{
      flex:3,
      alignItems:"center",
    }
})
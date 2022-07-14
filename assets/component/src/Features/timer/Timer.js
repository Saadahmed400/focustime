import React, {useState} from 'react'; //USestate will track what we are going to start
import { View, StyleSheet, Text, Vibration, Platform } from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {usekeepAwake} from 'expo-keep-awake';

import {Countdown } from '../../component/CountDown';
import {RoundedButton} from '../../component/RoundedButton';


import {Timings} from './Timings';
const DEFAULT_TIME =0.1
;
export const Timer = ({ focusSubject, 
onTimerEnd,
clearSubject }) => {
  usekeepAwake;
  const [minutes, setMinutes] = useState(DEFAULT_TIME); //tracking the time by usestate
  const [isStarted, setIsStarted] = useState(false); //isstared is false
  const [progress, setprogress] = useState(1);
  const onProgress = (progress) => {
    setprogress(progress)
 
  }

  const vibrate= () => {
    
    if(Platform.OS ==='ios'){
      const interval = setInterval(() => Vibration.vibrate(),1000);
      setTimeout(() => clearInterval(interval), 10000);
    }  else {
      Vibration.vibrate('10');
    }
  
  };
  const onEnd = () =>{
    vibrate();
   setMinutes(DEFAULT_TIME);
    setprogress(1);
    setIsStarted(true);
    onTimerEnd();
  };
  const changeTime = (min) =>{
    setMinutes(min);
    setprogress(1);
    setIsStarted(false)
  };
  return (

    <View style={styles.container}>
    <View style={styles.countDown}>  

    <Countdown
     minutes={minutes}
     isPaused={!isStarted}
     onProgress={onProgress}
     onEnd={onEnd}
      />   
    </View>
    <View style={{paddingTop:45}}>
    <Text style={styles.title}>Focusing On: </Text>
    <Text style={styles.heading}>{focusSubject} </Text>
    </View>
    <View style={{paddingTop:10}}>
    <ProgressBar
    progress={progress}
    color="blue"
    style={{height:7}} />
    </View>
    <View style={styles.buttonWraper}>
    <Timings onChangeTime={changeTime} />
    </View>
    <View style={styles.buttonWraper}>
    {isStarted ? (
    <RoundedButton title="Pause"  onPress={()=> setIsStarted(false)} />
  ) : (
    <RoundedButton title="Start"  onPress={()=> setIsStarted(true)} />
    )}  
    </View>
    <View styles={styles.clearSubject}>
    <RoundedButton title="-"
    size={50}
    onPress={()=> clearSubject() } />

    </View>
    </View>
  );
};
const styles= StyleSheet.create ({
  container:{
    flex:1,
  },
  title:{
    color:"white",
    textAlign:"center",
    justifyContent:"center",
  },
  heading:{
    color:"white",
    fontWeight:"bold",
    textAlign:"Center",
    justifyContent:"center",
  },
  countDown:{
    flex:0.5,
    alignItems:"center",
    justifyContent:"center",
  
  },
  buttonWraper:{
    flex:2,
    flexDirection:"row",
    padding:15,
    justifyContent:"center",
    alignItems:"center",    
  },
  clearSubject:{
    paddingBottom:25,
    paddleft:25,
    justifyContent:"center",
    alignItems:"center",

  }
});
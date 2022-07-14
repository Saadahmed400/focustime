import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const minutesToMills = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time); //Foramttime is added to count the time back! like 5.4.3.2.1. in seconds and in minutes

export const Countdown = ({ 
  minutes = 0.1,
   isPaused = true,
    onProgress,
    onEnd }) => {
  //added this line to make it paused
  const interval = React.useRef(null);
  const [millis, setMillis] = useState(minutesToMills(minutes));
  const Countdown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current)
        onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      //report the progress
      onProgress(timeLeft / minutesToMills(minutes));
      return timeLeft;
    })
  }
useEffect(() => {
  setMillis(minutesToMills(minutes))
},[minutes])
  useEffect(() => { 
    if (isPaused) { 
      if(interval.current) clearInterval(interval.current);
      
      //if paused then stop
      return;
    }
    interval.current = setInterval(Countdown, 1000);

    return () => clearInterval(interval.current);
  },  [isPaused]);
  

  const minute = Math.floor(millis / 1000 / 60) % 60; ////// calculating in min
  const seconds = Math.floor(millis / 1000) % 60; /// calculating in sec
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  ); //this is the all text where we added our text so we can change its format style.
};
const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'red',
    padding: '100',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

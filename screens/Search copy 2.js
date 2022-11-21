import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, PanResponder } from 'react-native';
import { LogBox } from 'react-native';
  const max= Dimensions.get('window').height*0.8
  const min= Dimensions.get('window').height*0.1
  const max_upward = min-max;
  const max_down=0
  const drag=30
const Search = () => {
  const lastGestureDy =useRef(0)
  const animatedValue = useRef(new Animated.Value(0)).current;
  const panResponder=useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current)
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy)
      },
      onPanResponderRelease: (e, gesture) => {
        lastGestureDy.current+=gesture.dy
        if(lastGestureDy.current<max_upward){
          lastGestureDy.current=max_upward
        }else if(lastGestureDy.current>max_down){
          lastGestureDy.current=max_down
        }

        if(gesture.dy>0){
          if(gesture.dy<=drag){
            lastGestureDy.current=max_upward
          }else{
            lastGestureDy.current=max_down
          }
        }else{
          if(gesture.dy>=-drag){
            lastGestureDy.current=max_down
          }else{
            lastGestureDy.current=max_upward

          }
        }
      },
    })
  ).current
  const toggle=()=>{
    const toValue = animatedValue._value === 0 ? 1 : 0;
    Animated.timing(animatedValue, {
      toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }
  const bottomAnimation ={
    transform:[{translateY: animatedValue.interpolate({
      inputRange: [max_upward, max_down],
      outputRange: [max_upward, max_down],
      extrapolate: 'clamp'
    }) ||0}]
  }
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])
 
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text onPress={()=> toggle()}>OK</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.bottomSheet, bottomAnimation]}>
        <View style={styles.area} {...panResponder.panHandlers}>
          <View style={styles.handle}></View>

        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: min-max,
    left: 0,
    right: 0,
    height: max,
    backgroundColor: 'red',
    width: '100%', borderTopLeftRadius: 32, borderTopRightRadius: 32
  },
  area:{
    width: 100, height: 20, alignSelf: 'center', justifyContent: 'center'
  },
  handle:{
    width: 100, height: 4, backgroundColor: 'gray', borderRadius: 10
  }
});

export default Search;

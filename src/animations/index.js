import { Animated } from "react-native";

export const pressBtn = (animationValue) => {
    console.log('animation?');
    Animated.spring(animationValue, {
      toValue: 0.8,
      useNativeDriver: false
    }).start();
  }

  export  const releaseBtn = (animationValue) => {
    Animated.spring(animationValue, {
      toValue: 1,
      //friction == bounciness lower values mean more bouncy
      friction: 4,
      // tension is how fast it bounces higher values make it faster
      tension: 100,
      useNativeDriver: false
    }).start();
  }

import { Animated, Easing } from 'react-native';

export const openAnimations = (
  animatedScale: Animated.Value,
  animatedOpacity: Animated.Value,
  scaleDuration: number,
  opacityDuration: number
) => {
  animatedScale.setValue(0.8);
  animatedOpacity.setValue(0);
  Animated.timing(animatedScale, {
    toValue: 1,
    duration: scaleDuration,
    easing: Easing.out(Easing.ease),
    useNativeDriver: true,
  }).start();
  Animated.timing(animatedOpacity, {
    toValue: 1,
    duration: opacityDuration,
    easing: Easing.out(Easing.ease),
    useNativeDriver: true,
  }).start();
};
export const closeAnimations = (
  animatedScale: Animated.Value,
  animatedOpacity: Animated.Value,
  scaleDuration: number,
  opacityDuration: number
) => {
  animatedScale.setValue(1);
  animatedOpacity.setValue(1);
  Animated.timing(animatedScale, {
    toValue: 0.8,
    duration: scaleDuration,
    easing: Easing.out(Easing.ease),
    useNativeDriver: true,
  }).start();
  Animated.timing(animatedOpacity, {
    toValue: 0,
    duration: opacityDuration,
    useNativeDriver: true,
  }).start();
};

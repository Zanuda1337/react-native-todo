import React, { useRef } from 'react';
import {
  Animated,
  Easing,
  GestureResponderEvent,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  ButtonText,
  HighLight,
  IStyledButtonProps,
  StyledButton,
  StyledView,
} from './CustomButton.styles';

interface ICustomButtonProps extends IStyledButtonProps {
  children: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: Record<string, string>;
}
const CustomButton: React.FC<ICustomButtonProps> = ({
  children,
  style,
  onPress,
  color = 'blue',
  variant = 'filled',
  textSize = 'small',
  size = 'small',
  disabled = false,
}) => {
  const animatedScale = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const handlePress = (event: GestureResponderEvent) => {
    animatedScale.setValue(0);
    animatedOpacity.setValue(1);
    Animated.timing(animatedScale, {
      toValue: 1,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 400,
      delay: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <StyledView style={style}>
      <HighLight
        style={{
          transform: [{ scaleX: animatedScale }],
          opacity: animatedOpacity,
        }}
        pointerEvents="none"
        variant={variant}
      />
      <TouchableWithoutFeedback
        onPress={(event) => {
          handlePress(event);
          onPress && onPress(event);
        }}
        disabled={disabled}
      >
        <StyledButton variant={variant} size={size} disabled={disabled}>
          <ButtonText variant={variant} textSize={textSize} color={color}>
            {children}
          </ButtonText>
        </StyledButton>
      </TouchableWithoutFeedback>
    </StyledView>
  );
};
export default CustomButton;

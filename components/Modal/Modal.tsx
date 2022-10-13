import React, { useEffect, useRef } from 'react';
import { closeAnimations, openAnimations } from './Modal.utils';
import { Backdrop, ModalContainer } from './Modal.styles';
import {
  Animated,
  GestureResponderEvent,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  CLOSE_OPACITY_DURATION,
  CLOSE_SCALE_DURATION,
  OPEN_OPACITY_DURATION,
  OPEN_SCALE_DURATION,
} from './Modal.consts';

type TModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onBackdropPress: (event: GestureResponderEvent) => void;
};

const Modal: React.FC<TModalProps> = ({
  isOpen,
  children,
  onBackdropPress,
}) => {
  const animatedScale = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const handleBackdropPress = (event: GestureResponderEvent) => {
    if (event.currentTarget === event.target) {
      closeAnimations(
        animatedScale,
        animatedOpacity,
        CLOSE_SCALE_DURATION,
        CLOSE_OPACITY_DURATION
      );
      setTimeout(() => onBackdropPress(event), CLOSE_SCALE_DURATION);
    }
  };

  useEffect(() => {
    if (isOpen)
      openAnimations(
        animatedScale,
        animatedOpacity,
        OPEN_SCALE_DURATION,
        OPEN_OPACITY_DURATION
      );
  }, [isOpen]);
  return (
    <>
      {isOpen && (
        <>
          <Backdrop pointerEvents="none" style={{ opacity: animatedOpacity }} />
          <TouchableWithoutFeedback onPress={handleBackdropPress}>
            <ModalContainer
              style={{
                opacity: animatedOpacity,
                transform: [{ scale: animatedScale }],
              }}
            >
              {children}
            </ModalContainer>
          </TouchableWithoutFeedback>
        </>
      )}
    </>
  );
};

export default Modal;

import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const ModalContainer = styled(Animated.View)`
  z-index: 1000;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  justify-content: center;
  align-items: center;
`;
export const Backdrop = styled(ModalContainer)`
  background-color: rgba(0, 0, 0, 0.3);
`;

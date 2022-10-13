import styled from 'styled-components/native';
import { Animated } from 'react-native';

export interface IStyledButtonProps {
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'small' | 'large';
  textSize?: 'small' | 'medium' | 'large';
  color?: 'blue' | 'gray';
  disabled?: boolean;
}
export const StyledView = styled.View`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`;
export const StyledButton = styled.View<IStyledButtonProps>`
  border-width: ${({ variant }) =>
    variant === 'ghost' || variant === 'filled' ? 0 : '2px'};
  border-color: ${({ variant }) =>
    variant === 'ghost' || variant === 'filled' ? 'unset' : '#3785cc'};
  border-radius: 8px;
  background-color: ${({ variant }) =>
    variant === 'filled' ? '#3785cc' : 'transparent'};
  padding: ${({ size }) => (size === 'small' ? '9px' : '15px')};
  opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};
`;
export const ButtonText = styled.Text<IStyledButtonProps>`
  color: ${({ variant, color }) => {
    if (variant === 'filled') {
      return '#fff';
    } else {
      return color === 'blue' ? '#3785cc' : '#C3C3C5';
    }
  }};
  text-transform: none;
  letter-spacing: 0;
  text-align: center;
  font-family: 'Inter-Medium';
  font-size: ${({ textSize }) => {
    switch (textSize) {
      case 'small':
        return '14px';
      case 'medium':
        return '16px';
      case 'large':
        return '17px';
      default:
        return;
    }
  }};
`;
export const HighLight = styled(Animated.View)<IStyledButtonProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ variant }) =>
    variant === 'filled' ? 'rgba(255,255,255,0.1)' : 'rgba(98,166,229,0.1)'};
  z-index: 1;
`;

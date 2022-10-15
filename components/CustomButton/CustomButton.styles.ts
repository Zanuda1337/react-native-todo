import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { globalTheme } from '../../assets/styles/globalTheme';

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
  border-radius: ${globalTheme.responsiveValue * 0.8}px;
`;
export const StyledButton = styled.View<IStyledButtonProps>`
  border-width: ${({ variant }) =>
    variant === 'ghost' || variant === 'filled'
      ? 0
      : `${globalTheme.responsiveValue * 0.2}px`};
  border-color: ${({ variant }) =>
    variant === 'ghost' || variant === 'filled'
      ? 'unset'
      : globalTheme.colors['main-foreground']};
  border-radius: ${globalTheme.responsiveValue * 0.8}px;
  background-color: ${({ variant }) =>
    variant === 'filled'
      ? globalTheme.colors['main-foreground']
      : 'transparent'};
  padding: ${({ size }) =>
    size === 'small'
      ? `${globalTheme.responsiveValue * 0.9}px`
      : `${globalTheme.responsiveValue * 1.5}px`};
  opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};
`;
export const ButtonText = styled.Text<IStyledButtonProps>`
  color: ${({ variant, color }) => {
    if (variant === 'filled') {
      return '#fff';
    } else {
      return color === 'blue'
        ? globalTheme.colors['main-foreground']
        : globalTheme.colors['foreground-pale'];
    }
  }};
  text-transform: none;
  letter-spacing: 0;
  text-align: center;
  font-family: 'Inter-Medium';
  font-size: ${({ textSize }) => {
    switch (textSize) {
      case 'small':
        return `${globalTheme.responsiveValue * 1.4}px`;
      case 'medium':
        return `${globalTheme.responsiveValue * 1.6}px`;
      case 'large':
        return `${globalTheme.responsiveValue * 1.7}px`;
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
    variant === 'filled'
      ? globalTheme.colors['main-background-highlighted']
      : globalTheme.colors['main-foreground-highlighted']};
  z-index: 1;
`;

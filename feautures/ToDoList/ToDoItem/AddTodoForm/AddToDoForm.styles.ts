import styled from 'styled-components/native';
import { globalTheme } from '../../../../assets/styles/globalTheme';

export const Form = styled.View`
  margin: 0 ${globalTheme.responsiveValue * 5.2}px;
  background: ${globalTheme.colors['modal-background']};
  border-radius: ${globalTheme.responsiveValue * 1.4}px;
`;
export const Fields = styled.View`
  padding: ${globalTheme.responsiveValue * 1.2}px
    ${globalTheme.responsiveValue * 1.6}px;
`;
export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FormTitle = styled.Text`
  color: ${globalTheme.colors['form-foreground']};
  line-height: ${globalTheme.responsiveValue * 2.2}px;
  font-size: ${globalTheme.responsiveValue * 1.7}px;
  font-family: 'Inter-Medium';
  text-align: center;
  margin: ${globalTheme.responsiveValue * 0.4}px 0;
`;
export const FormDescription = styled.Text`
  color: ${globalTheme.colors['form-foreground']};
  line-height: ${globalTheme.responsiveValue * 1.8}px;
  font-size: ${globalTheme.responsiveValue * 1.3}px;
  font-family: 'Inter-Regular';
  text-align: center;
`;

export const Input = styled.TextInput`
  border-color: ${globalTheme.colors['input-border']}
  border-width: ${globalTheme.responsiveValue * 0.05}px;
  border-radius: ${globalTheme.responsiveValue * 0.7}px;
  background-color: ${globalTheme.colors['main-background']}
  margin-top: ${globalTheme.responsiveValue * 1.6}px;
  line-height: ${globalTheme.responsiveValue * 1.8}px;
  font-size: ${globalTheme.responsiveValue * 1.3}px;
  font-family: 'Inter-Regular';
  height: ${globalTheme.responsiveValue * 3.2}px;
  padding: ${globalTheme.responsiveValue * 0.6}px;
  overflow: hidden;
  resize: none;
`;

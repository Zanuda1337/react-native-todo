import styled from 'styled-components/native';
import { globalTheme } from '../../assets/styles/globalTheme';
export const Filter = styled.View`
  padding: ${globalTheme.responsiveValue * 4.8}px
    ${globalTheme.responsiveValue * 1.6}px;
  border-bottom-width: 1px;
  border-bottom-color: ${globalTheme.colors['filter-separator']};
`;

export const ToDoContainer = styled.ScrollView`
  padding: 0 ${globalTheme.responsiveValue * 1.6}px;
  margin-top: ${globalTheme.responsiveValue * 2.7}px;
`;

export const ButtonContainer = styled.View`
  padding: ${globalTheme.responsiveValue * 3.6}px
    ${globalTheme.responsiveValue * 1.6}px;
`;

export const Title = styled.Text`
  font-size: ${globalTheme.responsiveValue * 1.5}px;
  text-align: center;
  font-family: 'Inter-Light';
`;

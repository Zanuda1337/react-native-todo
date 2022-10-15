import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { globalTheme } from '../../../assets/styles/globalTheme';

export interface IStyledToDoItemProps {
  isDone: boolean;
}
export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${globalTheme.responsiveValue * 1.1}px 0;
  border-bottom-color: ${globalTheme.colors['items-separator']};
  border-bottom-width: 1px;
`;

export const TextWrapper = styled.View`
  margin-left: ${globalTheme.responsiveValue * 1.7}px;
  flex-grow: 1;
  width: ${Dimensions.get('window').width - globalTheme.responsiveValue * 18}px;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: ${globalTheme.responsiveValue * 4}px;
  height: ${globalTheme.responsiveValue * 4}px;
  background-color: ${globalTheme.colors['delete-button']};
  border-radius: ${globalTheme.responsiveValue * 0.8}px;
  justify-content: center;
  align-items: center;
  margin-left: ${globalTheme.responsiveValue * 1.7}px;
`;

export const Title = styled.Text`
  font-size: ${globalTheme.responsiveValue * 1.7}px;
  line-height: ${globalTheme.responsiveValue * 2.55}px;
  font-family: 'Inter-Medium';
  margin-bottom: ${globalTheme.responsiveValue * 0.2}px;
`;
export const Task = styled.Text<IStyledToDoItemProps>`
  font-size: ${globalTheme.responsiveValue * 1.3}px;
  font-family: 'Inter-Regular';
  text-decoration-line: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
`;

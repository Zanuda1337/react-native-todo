import React, { useState } from 'react';
import CheckBox from '../../../components/Checkbox/Checkbox';
import { Dimensions, GestureResponderEvent, View } from 'react-native';
import styled from 'styled-components/native';
import SvgSelector from '../../../components/SvgSelector/SvgSelector';

interface IToDoItemProps extends IStyledToDoItemProps {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  onPressDelete: (id: number) => void;
  onToggleToDoCompleted: (id: number) => void;
}

const ToDoItem: React.FC<IToDoItemProps> = ({
  id,
  title,
  description,
  isDone,
  onPressDelete,
  onToggleToDoCompleted,
}) => {
  return (
    <Container>
      <CheckBox value={isDone} onPress={() => onToggleToDoCompleted(id)} />
      <TextWrapper>
        <Title>{title}</Title>
        <Task isDone={isDone}>{description}</Task>
      </TextWrapper>
      <DeleteButton onPress={() => onPressDelete(id)}>
        <View>
          <SvgSelector id="trash" />
        </View>
      </DeleteButton>
    </Container>
  );
};

export default ToDoItem;
interface IStyledToDoItemProps {
  isDone: boolean;
}
const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 11px 0;
  border-bottom-color: #eef8fd;
  border-bottom-width: 1px;
`;

const TextWrapper = styled.View`
  margin-left: 17px;
  flex-grow: 1;
  width: ${Dimensions.get('window').width - 180}px;
`;

const DeleteButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-left: 17px;
`;

const Title = styled.Text`
  font-size: 17px;
  line-height: 25.5px;
  font-family: 'Inter-Medium';
  margin-bottom: 2px;
`;
const Task = styled.Text<IStyledToDoItemProps>`
  font-size: 13px;
  font-family: 'Inter-Regular';
  text-decoration-line: ${({ isDone }) => (isDone ? 'line-through' : 'none')};
`;

import React from 'react';
import CheckBox from '../../../components/Checkbox/Checkbox';
import SvgSelector from '../../../components/SvgSelector/SvgSelector';
import { View } from 'react-native';
import {
  Container,
  DeleteButton,
  IStyledToDoItemProps,
  Task,
  TextWrapper,
  Title,
} from './ToDoItem.styles';

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

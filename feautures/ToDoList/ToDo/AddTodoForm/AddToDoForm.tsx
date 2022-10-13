import CustomButton from '../../../../components/CustomButton/CustomButton';
import React from 'react';
import {
  ButtonsContainer,
  Fields,
  Form,
  FormDescription,
  FormTitle,
  Input,
} from './AddToDoForm.styles';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

type TAddToDoFormProps = {
  title: string;
  task: string;
  onCancel: () => void;
  onConfirm: () => void;
  onTitleChange: (title: string) => void;
  onTaskChange: (task: string) => void;
};

const AddToDoForm: React.FC<TAddToDoFormProps> = ({
  title,
  task,
  onCancel,
  onConfirm,
  onTitleChange,
  onTaskChange,
}) => {
  const isFieldsEmpty = !(title && task);
  return (
    <Form>
      <Fields>
        <FormTitle>Добавить предмет</FormTitle>
        <FormDescription>Укажите заголовок и задание</FormDescription>
        <Input
          value={title}
          onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) =>
            onTitleChange(event.nativeEvent.text)
          }
          placeholder="* Заголовок"
        />
        <Input
          value={task}
          onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) =>
            onTaskChange(event.nativeEvent.text)
          }
          placeholder="* Задание"
        />
      </Fields>
      <ButtonsContainer>
        <CustomButton
          style={{ width: '50%' }}
          textSize="large"
          variant="ghost"
          size="large"
          color="gray"
          onPress={onCancel}
        >
          Отмена
        </CustomButton>
        <CustomButton
          style={{ width: '50%' }}
          textSize="large"
          variant="ghost"
          size="large"
          disabled={isFieldsEmpty}
          color={isFieldsEmpty ? 'gray' : 'blue'}
          onPress={onConfirm}
        >
          Сохранить
        </CustomButton>
      </ButtonsContainer>
    </Form>
  );
};
export default AddToDoForm;

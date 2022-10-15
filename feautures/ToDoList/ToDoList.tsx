import React, { useRef, useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import Modal from '../../components/Modal/Modal';
import AddToDoForm from './ToDoItem/AddTodoForm/AddToDoForm';
import FilterModal from './ToDoItem/FilterModal/FilterModal';
import ToDoItem from './ToDoItem/ToDoItem';
import { TToDo } from './ToDoItem/ToDoItem.types';
import { filterOptions } from './ToDoList.consts';
import { ScrollView } from 'react-native';
import { RootState } from '../../redux/store.types';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getFilteredValue, scrollToDosToBottom } from './ToDoList.utils';
import { TFilterBy, TFilterOption } from './ToDoList.types';
import {
  addToDo,
  removeToDo,
  setToDoFormTask,
  setToDoFormTitle,
  toggleToDoCompleted,
} from './ToDoList.slice';
import {
  ButtonContainer,
  Filter,
  Title,
  ToDoContainer,
} from './ToDoList.styles';

const ToDoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state: RootState) => state.toDoList.todos);
  const todoForm = useAppSelector(
    (state: RootState) => state.toDoList.todoForm
  );
  const [filterBy, setFilterBy] = useState<TFilterBy>(filterOptions[0].name);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const closeForm = () => setIsFormVisible(false);
  const closeFilter = () => setIsFilterVisible(false);

  const handleToggleToDoCompleted = (id: number) =>
    dispatch(toggleToDoCompleted(id));
  const handlePressDelete = (id: number) => dispatch(removeToDo(id));
  const handleTitleChange = (title: string) =>
    dispatch(setToDoFormTitle(title));
  const handleTaskChange = (task: string) => dispatch(setToDoFormTask(task));
  const handleConfirmAddToDo = () => {
    dispatch(addToDo());
    setIsFormVisible(false);
    scrollToDosToBottom(scrollViewRef);
  };
  const handleFilterChange = (filterValue: TFilterBy) => {
    setFilterBy(filterValue);
    setIsFilterVisible(false);
  };
  const filter = (todos: TToDo[], filterBy: TFilterBy) => {
    return todos.filter((todo) => getFilteredValue(filterBy, todo));
  };
  const getFilterOptionLabel = (
    filterOptions: TFilterOption[],
    filterBy: TFilterBy
  ): string => {
    const label = filterOptions.find(
      (option) => option.name === filterBy
    )?.label;
    return label ? label : '';
  };
  return (
    <>
      <Modal isOpen={isFormVisible} onBackdropPress={closeForm}>
        <AddToDoForm
          title={todoForm.title}
          task={todoForm.task}
          onCancel={closeForm}
          onConfirm={handleConfirmAddToDo}
          onTitleChange={handleTitleChange}
          onTaskChange={handleTaskChange}
        />
      </Modal>
      <Modal isOpen={isFilterVisible} onBackdropPress={closeFilter}>
        <FilterModal
          filterOptions={filterOptions}
          filterBy={filterBy}
          onFilterChange={handleFilterChange}
        />
      </Modal>
      <Filter>
        <CustomButton
          onPress={() => setIsFilterVisible(true)}
          variant="outlined"
        >
          {getFilterOptionLabel(filterOptions, filterBy)}
        </CustomButton>
      </Filter>
      <ToDoContainer ref={scrollViewRef} onLayout={scrollToDosToBottom}>
        {filter(todos, filterBy).length !== 0 ? (
          filter(todos, filterBy).map((todo) => (
            <ToDoItem
              id={todo.id}
              key={todo.id}
              isDone={todo.isCompleted}
              title={todo.title}
              description={todo.task}
              onToggleToDoCompleted={handleToggleToDoCompleted}
              onPressDelete={handlePressDelete}
            />
          ))
        ) : (
          <Title>Нет заданий</Title>
        )}
      </ToDoContainer>
      <ButtonContainer>
        <CustomButton
          onPress={() => setIsFormVisible(true)}
          variant="filled"
          size="large"
          textSize="medium"
        >
          Добавить
        </CustomButton>
      </ButtonContainer>
    </>
  );
};

export default ToDoList;

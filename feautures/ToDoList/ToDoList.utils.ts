import React from 'react';
import { ScrollView } from 'react-native';
import { filterStates, TFilterBy } from './ToDoList.types';
import { TToDo } from './ToDo/ToDoItem.types';

export const scrollToDosToBottom = (
  scrollViewRef: React.RefObject<ScrollView>
) => {
  if (scrollViewRef.current)
    scrollViewRef.current.scrollToEnd({ animated: true });
};

export const getFilteredValue = (filterBy: TFilterBy, todo: TToDo) => {
  switch (filterBy) {
    case filterStates.byActive:
      return !todo.isCompleted;
    case filterStates.byCompleted:
      return todo.isCompleted;
    case filterStates.none:
      return todo;
    default:
      return todo;
  }
};

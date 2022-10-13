import { configureStore } from '@reduxjs/toolkit';
import toDoListReducer from '../feautures/ToDoList/ToDoList.slice';
export const store = configureStore({
  reducer: {
    toDoList: toDoListReducer,
  },
});

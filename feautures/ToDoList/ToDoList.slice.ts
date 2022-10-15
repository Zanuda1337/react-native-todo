import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toDoListMocks } from './ToDoList.mocks';
import { TToDo } from './ToDo/ToDoItem.types';
import { AppThunk } from '../../redux/store.types';

interface IToDoListState {
  todos: TToDo[];
  todoForm: { title: string; task: string };
}

const initialState: IToDoListState = {
  todos: [...toDoListMocks],
  todoForm: {
    title: '',
    task: '',
  },
};

const ToDoListSlice = createSlice({
  name: 'ToDoList',
  initialState,
  reducers: {
    pushToDo: (state) => {
      state.todos.push({
        id:
          state.todos.length !== 0
            ? state.todos[state.todos.length - 1].id + 1
            : 0,
        title: state.todoForm.title,
        task: state.todoForm.task,
        isCompleted: false,
      });
    },
    removeToDo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    toggleToDoCompleted: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) todo.isCompleted = !todo.isCompleted;
    },
    setToDoFormTitle: (state, action: PayloadAction<string>) => {
      state.todoForm.title = action.payload;
    },
    setToDoFormTask: (state, action: PayloadAction<string>) => {
      state.todoForm.task = action.payload;
    },
  },
});

export const addToDo = (): AppThunk => (dispatch) => {
  dispatch(pushToDo());
  dispatch(setToDoFormTitle(''));
  dispatch(setToDoFormTask(''));
};

export const {
  pushToDo,
  removeToDo,
  toggleToDoCompleted,
  setToDoFormTitle,
  setToDoFormTask,
} = ToDoListSlice.actions;

export default ToDoListSlice.reducer;

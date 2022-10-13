import { filterStates, TFilterOption } from './ToDoList.types';

export const filterOptions: TFilterOption[] = [
  {
    label: 'Показывать все задания',
    name: filterStates.none,
  },
  {
    label: 'Выполненные',
    name: filterStates.byCompleted,
  },
  {
    label: 'Не выполненные',
    name: filterStates.byActive,
  },
];

export enum filterStates {
  none = '',
  byActive = 'active',
  byCompleted = 'done',
}
export type TFilterBy =
  | filterStates.none
  | filterStates.byActive
  | filterStates.byCompleted;

export type TFilterOption = {
  label: string;
  name: TFilterBy;
};

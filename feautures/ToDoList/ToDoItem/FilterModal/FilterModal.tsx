import React from 'react';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import { FilterContainer } from './FilterModal.styles';
import { TFilterBy, TFilterOption } from '../../ToDoList.types';

type TFilterModalProps = {
  filterOptions: TFilterOption[];
  filterBy: TFilterBy;
  onFilterChange: (filterValue: TFilterBy) => void;
};
const FilterModal: React.FC<TFilterModalProps> = ({
  filterOptions,
  filterBy,
  onFilterChange,
}) => {
  return (
    <FilterContainer>
      {filterOptions.map((option) => (
        <CustomButton
          key={option.name}
          size="large"
          textSize="medium"
          variant="ghost"
          color={filterBy === option.name ? 'blue' : 'gray'}
          onPress={() => onFilterChange(option.name)}
        >
          {option.label}
        </CustomButton>
      ))}
    </FilterContainer>
  );
};
export default FilterModal;

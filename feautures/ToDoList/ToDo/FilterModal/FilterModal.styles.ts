import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const FilterContainer = styled.View`
  background: rgba(249, 249, 249, 0.94);
  width: ${Dimensions.get('window').width - 15}px;
  border-radius: 14px;
`;

import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { globalTheme } from '../../../../assets/styles/globalTheme';

export const FilterContainer = styled.View`
  background: ${globalTheme.colors['modal-background']};
  width: ${Dimensions.get('window').width -
  globalTheme.responsiveValue * 1.5}px;
  border-radius: ${globalTheme.responsiveValue * 1.4}px;
`;

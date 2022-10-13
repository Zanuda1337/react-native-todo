import styled from 'styled-components/native';

export const Form = styled.View`
  margin: 0 52px;
  background: rgba(249, 249, 249, 0.94);
  border-radius: 14px;
`;
export const Fields = styled.View`
  padding: 12px 16px;
`;
export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FormTitle = styled.Text`
  color: #3b3b3b;
  line-height: 22px;
  font-size: 17px;
  font-family: 'Inter-Medium';
  text-align: center;
  margin: 4px 0;
`;
export const FormDescription = styled.Text`
  color: #3b3b3b;
  line-height: 18px;
  font-size: 13px;
  font-family: 'Inter-Regular';
  text-align: center;
`;

export const Input = styled.TextInput`
  border-color: rgba(60, 60, 67, 0.3);
  border-width: 0.5px;
  border-radius: 7px;
  background-color: #fff;
  margin-top: 16px;
  line-height: 18px;
  font-size: 13px;
  font-family: 'Inter-Regular';
  height: 32px;
  padding: 6px;
  overflow: hidden;
  resize: none;
`;

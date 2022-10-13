import {
  GestureResponderEvent,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import SvgSelector from '../SvgSelector/SvgSelector';
import { CHECKBOX_CHECKED, CHECKBOX_UNCHECKED } from './Checkbox.consts';

type TCheckBoxProps = {
  value: boolean;
  onPress: (event: GestureResponderEvent) => void;
};

const CheckBox: React.FC<TCheckBoxProps> = ({ onPress, value }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <SvgSelector id={value ? CHECKBOX_CHECKED : CHECKBOX_UNCHECKED} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CheckBox;

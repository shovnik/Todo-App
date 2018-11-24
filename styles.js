import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { Constants } from 'expo';


export const Container = styled.View`
  alignItems: stretch;
  border-bottom-color: #000;
  border-bottom-width: 1;
  flexDirection: row;
  ${({ index }) => !index && 'border-top-color: #000; border-top-width: 1;'}
`;

export const DangerText = styled.Text`
  background-color: #f44;
  border-radius: 5px;
  color: #fff;
  justify-content: center;
  text-align: center;
  padding: 4px 2px;
`;

export const FilterContainer = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ isActive }) => isActive ? '#ccc': '#fff'};
  flex: 1;
  justify-content: center;
  padding: 15px 20px;
`;

export const FilterText = styled.Text`
`;

export const Form = styled.View`
  flexDirection: row;
  padding: 20px 10px;
`;

export const Input = styled.TextInput`
  background-color: #eee;
  font-size: 22px;
  flex: 1;
  padding: 0 10px;
`;

export const List = styled.View`
`;

export const SubmitButton = styled.Button`
  flex: 1;
  minWidth: 200px;
`;

export const TaskText = styled.Text`
  font-size: 22px;
  justify-content: center;
  margin: 15px 0;
  ${({ completed }) => {
    return completed && 'textDecorationLine: line-through;'
  }}
`;

export const TouchableContainer = styled.TouchableOpacity`
  justify-content: center;
  flex: ${({flex}) => flex};
  margin: 0 10px;
  padding: 0 10px;
`;

export const Wrapper = styled.ScrollView`
  background-color: #fff;
  flex: 1;
  marginTop: ${ Platform.OS === 'ios' ? 0: Constants.statusBarHeight };
  padding: 15px 0;
`;

import styled from 'styled-components/native'
import { Dropdown as DropdownNative } from 'react-native-element-dropdown'

export const Dropdown = styled(DropdownNative).attrs((props) => ({
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
    marginLeft: 12,
  },
  iconStyle: {
    width: 16,
    height: 16,
    marginRight: 12,
  },
  activeColor: props.theme.colors['gray-7'],
  itemContainerStyle: {
    backgroundColor: props.theme.colors['gray-7'],
  },
}))`
  height: 34px;
  width: 111px;
  background-color: ${(props) => props.theme.colors['gray-7']};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors['gray-3']};
`

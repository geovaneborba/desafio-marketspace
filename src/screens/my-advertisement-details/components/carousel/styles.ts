import styled from 'styled-components/native'

export const Container = styled.View`
  position: relative;
`
export const FlatList = styled.FlatList``

export const Overlay = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.45);
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StatusText = styled.Text`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors['gray-7']};
  font-size: ${(props) => props.theme.fontSize.md};
  font-family: ${(props) => props.theme.fontFamily.bold};
`

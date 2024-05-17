
import { mediaQuery } from '@/mixins/mediaQuery'
import styled from 'styled-components'

export const wrapper = styled.div`
  position: sticky;
  width:100%;
  padding: 20px 0;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 9;
  background-color: ${(props) => {
    return props.theme.invertBackground
  }};
  backdrop-filter: blur(10px);
`

export const nav = styled.div`

  display: flex;
  width:100%;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 9;
  background-color: ${(props) => {
    return props.theme.invertBackground
  }};
  backdrop-filter: blur(10px);
`

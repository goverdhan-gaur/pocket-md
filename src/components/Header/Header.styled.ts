
import { mediaQuery } from '@/mixins/mediaQuery'
import styled from 'styled-components'

export const wrapper = styled.div`
  position: sticky;
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
  align-items: center;
  top: 0;
  z-index: 9;
  background-color: ${(props) => {
    return props.theme.invertBackground
  }};
  backdrop-filter: blur(10px);

  ${mediaQuery('Tablet', `
    padding: 2.5rem;
  `)}
  ${mediaQuery('Mobile', `
    padding: 3rem;
  `)}
`


import { px } from '@/mixins/getRemFontSize'
import { mediaQuery } from '@/mixins/mediaQuery'
import styled from 'styled-components'

export const wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  ${mediaQuery(
  'Tablet',
  ` 
        gap: 1.5rem;
    `
)};
  ${mediaQuery(
  'Mobile',
  `
    gap: 2rem;
    `
)};
`
export const label = styled.p`
  color: ${({ theme }) => theme.invertColor};
  ${mediaQuery(
  'Tablet',
  ` 
        ${px(28)}
    `
)};
  ${mediaQuery(
  'Mobile',
  ` 
        display: none;
    `
)};
`

export const plusWrapper = styled.div`
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQuery(
  'Tablet',
  ` 
        height: 3rem;
        width: 3rem;
    `
)}
  ${mediaQuery(
  'Mobile',
  ` 
        height: 4rem;
        width: 4rem;
    `
)}
`

export const span = styled.span`
  display: block;
  width: 10%;
  height: 100%;
  background: ${({ theme }) => theme.background};
  &:last-child {
    position: absolute;
    transform: rotate(90deg);
  }
`

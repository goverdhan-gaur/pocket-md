import { px } from '@/mixins/getRemFontSize'
import { mediaQuery } from '@/mixins/mediaQuery'
import styled from 'styled-components'

export const wrapper = styled.div``

export const formGroup = styled.div`
  margin: 1rem 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  ${mediaQuery(
    'Mobile',
    `
    margin: 2rem 0;
`
)}
`

export const label = styled.label`
  position: relative;
  ${px(14)};
  ${mediaQuery(
    'Tablet',
    `
    ${px(30)}
  `
)};
  ${mediaQuery(
    'Mobile',
    `
${px(40)}
`
)}
`

export const star = styled.span`
  position: absolute;
  right: -7px;
  color: red;
  top: 0;
  ${px(12)};
  ${mediaQuery(
    'Tablet',
    `
    ${px(26)}
  `
)};
  ${mediaQuery(
    'Mobile',
    `
${px(38)}
`
)}
`

export const message = styled.span`
  padding-top: 5px;
  display: block;
  color: red;
  ${px(12)}
  ${mediaQuery(
    'Tablet',
    `
    ${px(20)}
  `
)};
  ${mediaQuery(
    'Mobile',
    `
    ${px(40)}
  `
)}
`

export const textarea = styled.textarea`
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  border-radius: 0;
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid;
  max-height: 100px;
  ${px(14)};
  ${mediaQuery(
    'Tablet',
    `
    ${px(30)}
  `
)};
  ${mediaQuery(
    'Mobile',
    `
${px(40)}
`
)}
`

export const input = styled.input`
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  border-radius: 0;
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid;
  ${px(14)};
  ${mediaQuery(
    'Tablet',
    `
    ${px(30)}
  `
)};
  ${mediaQuery(
    'Mobile',
    `
${px(40)}
`
)}
  &[type="submit"] {
    background: ${({ theme }) => theme.invertHighlightColor};
    color: ${({ theme }) => theme.white};
    border: none;
    outline: none;
  }
`

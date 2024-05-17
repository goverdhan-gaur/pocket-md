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
${px(60)}
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
${px(48)}
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
    ${px(60)}
  `
)}
`

interface TextAreaProps {
  onChange: React.FormEventHandler<HTMLTextAreaElement>;
  name?: string;
  id?: string;
  rows: number;
  required?: boolean;
}

export const textarea = styled.textarea<TextAreaProps>`
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
${px(60)}
`
)}
`

interface InputProps {
  type: 'number' | 'text' | 'url' | 'date' | 'file' | 'submit';
  name?: string;
  id?: string;
  value?: string;
  required?: boolean;
  onChange: React.FormEventHandler<HTMLInputElement>;
  accept?: string;
}

export const input = styled.input<InputProps>`
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
    ${px(40)}
  `
)};
  ${mediaQuery(
  'Mobile',
  `
${px(60)}
`
)}
  &[type="submit"] {
    background: ${({ theme }) => theme.invertHighlightColor};
    color: ${({ theme }) => theme.white};
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => `${theme.invertHighlightColor}ee`};
    }
  }
`

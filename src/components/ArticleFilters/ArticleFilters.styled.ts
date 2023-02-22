import { px } from '@/mixins/getRemFontSize';
import { mediaQuery } from '@/mixins/mediaQuery';
import styled from 'styled-components'

interface filterListItemProps {
    isActive: boolean
}

interface filterListProps {
    showfilters: boolean
}

export const filterList = styled.ul<filterListProps>`
  ${({ showfilters }) => (showfilters ? '--p-y: 1.2rem;' : '--p-y: 0;')};
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 3rem;
  list-style-type: none;
  ${px(20)}
  padding: var(--p-y) 0;
  ${mediaQuery(
    'Tablet',
    `
      ${px(30)}
      width: 50%;
      padding: calc(var(--p-y) * 1.5) 0;
      `
)}
  ${mediaQuery(
    'Mobile',
    `
          ${px(40)}
          width: 60%;
          padding: calc(var(--p-y) * 2.5) 0;
          `
)}
`

filterList.defaultProps = {
    showfilters: false,
}

export const filterListItem = styled.li<filterListItemProps>`
  width: fit-content;
  text-align: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  -webkit-border-radius: 10rem;
  -moz-border-radius: 10rem;
  border-radius: 10rem;
  text-transform: capitalize;

  background-color: ${(props) =>
        props.isActive
            ? props.theme.highlightColor
            : `${props.theme.background}00`};
  border: ${(props) => `2px solid ${props.theme.highlightColor}`};
  color: ${(props) =>
        props.isActive ? props.theme.invertColor : props.theme.color};
  ${mediaQuery(
            'Tablet',
            `
        padding: 0.75rem 1.25rem;
    `
        )}
  ${mediaQuery(
            'Mobile',
            `
        padding: 1rem 1.50rem;
        `
        )}
`

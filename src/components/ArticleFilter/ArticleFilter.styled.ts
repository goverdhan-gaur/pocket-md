import { px } from '@/mixins/getRemFontSize'
import { mediaQuery } from '@/mixins/mediaQuery'
import styled from 'styled-components'

interface filterListItemProps {
    isActive: boolean
}

export const wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 9;
  background-color: ${(props) => {
        return props.theme.invertBackground
    }};
  backdrop-filter: blur(10px);
`
export const filterList = styled.ul`
  width: 40%;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 3rem;
  list-style-type: none;
  ${px(20)}
  ${mediaQuery(
    'Tablet',
    `
        ${px(30)}
        width: 50%;
        padding: 2rem 0;
    `
)}
    ${mediaQuery(
    'Mobile',
    `
        ${px(40)}
        width: 60%;
        padding: 2.5rem 0;
    `
)}
`
export const filterListItem = styled.li<filterListItemProps>`
  width: fit-content;
  text-align: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 10rem;
  text-transform: capitalize;
  background-color: ${(props) => {
        return props.theme.invertBackground
    }};
  background-color: ${(props) =>
        props.isActive
            ? props.theme.highlightColor
            : `${props.theme.background}00`};
  outline: ${(props) =>
        props.isActive ? 'none' : `2px solid ${props.theme.highlightColor}`};
  color: ${(props) => props.isActive ? props.theme.color : props.theme.invertColor};
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

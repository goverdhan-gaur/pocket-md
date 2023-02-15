import { px } from '@/mixins/getRemFontSize'
import { mediaQuery } from '@/mixins/mediaQuery'
import styled from 'styled-components'

interface filterListItemProps {
    isActive: boolean
}

export const wrapper = styled.div`
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.4);
  z-index: 9;
  backdrop-filter: blur(10px);
`
export const filterList = styled.ul`
  width: 40%;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
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
  background-color: ${(props) =>
        props.isActive ? 'black' : 'rgba(255,255,255,0.4)'};
  outline: ${(props) =>
        props.isActive ? 'none' : '1.5px solid rgba(0,0,0,0.4)'};
  color: ${(props) => (props.isActive ? 'white' : 'black')};
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

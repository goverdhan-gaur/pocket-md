import { px } from '@/mixins/getRemFontSize';
import { mediaQuery } from '@/mixins/mediaQuery';
import styled from 'styled-components'

interface filterListItemProps {
    isActive: boolean
}

export const wrapper = styled.div`
    border-bottom: 1px solid black;
    position: sticky;
    top: 0;
    background: rgba(255,255,255,0.4);
    z-index: 9;
    backdrop-filter: blur(10px);
`;
export const filterList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    ${px(28)}
    ${mediaQuery('Tablet', `
        ${px(36)}
    `)}
    ${mediaQuery('Mobile', `
        ${px(70)}
    `)}
    
`;
export const filterListItem = styled.li<filterListItemProps>`
    width: 100%;
    text-align: center;
    padding: 2rem 0;
    background-color: ${(props) => props.isActive ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)'};
    color: ${(props) => props.isActive ? 'white' : 'black)'};
    ${mediaQuery('Desktop', `
        cursor: pointer
    `)}
`;

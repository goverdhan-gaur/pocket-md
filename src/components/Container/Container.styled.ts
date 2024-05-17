import { mediaQuery } from '@/mixins/mediaQuery';
import styled from 'styled-components'

export const wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 2rem;
    ${mediaQuery('LargeDesktop', `
    max-width: 1200px;
    `)}
    ${mediaQuery('Desktop', `
    max-width: 1000px;
    
    `)}
    ${mediaQuery('Tablet', `
    max-width: 800px;
    padding: 0 3rem;
    `)}
    ${mediaQuery('Mobile', `
    max-width: 600px;
    padding: 0 6rem;
    `)}
`;

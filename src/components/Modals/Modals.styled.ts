import { mediaQuery } from '@/mixins/mediaQuery';
import styled from 'styled-components'

export const wrapper = styled.div`
    display: flex;
    gap: 3rem;
    ${mediaQuery('Tablet', '  gap: 4rem;')}
    ${mediaQuery('Mobile', '  gap: 6rem;')}
`;

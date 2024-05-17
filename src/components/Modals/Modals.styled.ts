import { mediaQuery } from '@/mixins/mediaQuery';
import styled from 'styled-components'

export const wrapper = styled.div`
    font-size:20px;
    display: flex;
    gap: 50px;
    ${mediaQuery(
    'Mobile',
    ` 
        gap: 20px;
          `
)};
`;

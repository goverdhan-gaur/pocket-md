
import { HTMLAttributes } from 'react';
import styled from 'styled-components'
interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
}
export const wrapper = styled.div<WrapperProps>`
    width: 100%;
    padding-bottom: 5rem;
    min-height: 100vh;
    background: ${props => props.theme.background};
   
`

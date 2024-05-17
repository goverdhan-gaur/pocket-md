import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styled from 'styled-components'
interface ComponentProps {
    key: number;
    onClick: () => void;
    children?: ReactNode
    // Add other props as needed
}
export const wrapper = styled.div<ComponentProps>`
    cursor: pointer;
    z-index:99;
  `;
export const toggleBackground = styled(motion.div)`
    position: relative;
    width: 50px;
    background: ${({ theme }) => theme.background};
    height: 25px;
    border-radius: 25px;
`
export const toggleIcon = styled(motion.div)`
    width: 17.5px;
    height: 17.5px;
    top: 3.75px;
    background: ${({ theme }) => theme.invertBackground};
    border-radius: 50%;
`
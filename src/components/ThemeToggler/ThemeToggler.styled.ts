import { mediaQuery } from '@/mixins/mediaQuery';
import { motion } from 'framer-motion';
import styled from 'styled-components'

export const wrapper = styled.div`
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    right: 2rem;
    z-index:99;
    ${mediaQuery('Mobile', `
        right: 3rem;
    `)}
  `;
export const toggleBackground = styled(motion.div)`
    position: relative;
    width: 4rem;
    background: ${({ theme }) => theme.background};
    height: 2rem;
    border-radius: 2rem;
    ${mediaQuery('Mobile', `
        width: 8rem;
        height: 4rem;
    `)}
`
export const toggleIcon = styled(motion.div)`
    width: 1.5rem;
    height: 1.5rem;
    top: 0.25rem;
    background: ${({ theme }) => theme.invertBackground};
    border-radius: 50%;
    ${mediaQuery('Mobile', `
        width: 3rem;
        height: 3rem;
        top: 0.5rem;
    `)}
`
import { mediaQuery } from '@/mixins/mediaQuery';
import { motion } from 'framer-motion';
import styled from 'styled-components'

export const wrapper = styled.div`
    position: fixed;
    cursor: pointer;
    top: 10px;
    right: 10px;
    z-index:99;
    ${mediaQuery('Mobile', `
    top: 15px;
    right: 15px;
    `)}
  `;
export const toggleBackground = styled(motion.div)`
    position: relative;
    width: 50px;
    background: ${({ theme }) => theme.background};
    height: 30px;
    border-radius: 20px;
    ${mediaQuery('Mobile', `
        height: 22.5px;
        width: 37.5px;
    `)}
`
export const toggleIcon = styled(motion.div)`
    width: 20px;
    height: 20px;
    top: 5px;
    background: ${({ theme }) => theme.invertBackground};
    border-radius: 50%;
    ${mediaQuery('Mobile', `
        height: 15px;
        width: 15px;
        top: 4px;
    `)}
`
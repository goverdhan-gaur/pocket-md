import { motion } from 'framer-motion';
import styled from 'styled-components'

export const wrapper = styled(motion.div)`
    position: relative;
    width: 100%;
    height: 1.5rem;
    border: 1px solid ${({ theme }) => theme.highlight}
`;

export const bar = styled(motion.div)`
    position: relative;
    width: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.invertBackground}
`;


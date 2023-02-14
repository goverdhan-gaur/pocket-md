import styled, { css, keyframes } from 'styled-components'
import { motion } from 'framer-motion'
export const wrapper = styled.div`
  margin: 4rem auto;
  width: fit-content;
  display: flex;
  gap: 5px;
  & > div {
    width: 7px;
    height: 7px;
    background: black;
    border-radius: 50%;
  }
`
export const left = styled(motion.div)``
export const center = styled(motion.div)``
export const right = styled(motion.div)``

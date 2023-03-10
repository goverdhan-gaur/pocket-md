
import { px } from '@/mixins/getRemFontSize'
import { mediaQuery } from '@/mixins/mediaQuery'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const wrapper = styled(motion.div)`
  position: fixed;
  padding: 1.5rem;
  width: 90%;
  max-width: 600px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.invertBackground};
  z-index: 101;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${mediaQuery('Mobile', `
    padding: 3rem;
  `)}
`
export const formHeading = styled.h1`
${mediaQuery('Tablet', `
  ${px(48)};
`)}
${mediaQuery('Mobile', `
  ${px(72)};
`)}`

export const form = styled.form<{ enctype: string }>`
  position: relative;
  border: 1px solid ${({ theme }) => theme.invertBackground};
  padding: 1rem;
  ${mediaQuery('Tablet', `
    padding: 2rem;
  `)}
  ${mediaQuery('Mobile', `
    padding: 3rem;
  `)}
`

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: ${({ theme }) => theme.backgroundTransparent};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`

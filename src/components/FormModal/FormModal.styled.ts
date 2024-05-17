
import { px } from '@/mixins/getRemFontSize'
import { mediaQuery } from '@/mixins/mediaQuery'
import { motion } from 'framer-motion'
import { FormEvent, ReactNode } from 'react'
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
interface FormProps {
  onSubmit: (event: FormEvent<Element>) => void;
  enctype: string;
  children?: ReactNode; // Include the children prop
}

export const form = styled.form<FormProps>`
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
interface ButtonProps {
  onClick: () => void;
}
export const Backdrop = styled.div<ButtonProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: ${({ theme }) => theme.backgroundTransparent};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`

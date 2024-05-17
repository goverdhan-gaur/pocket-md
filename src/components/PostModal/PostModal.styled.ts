import { px } from '@/mixins/getRemFontSize'
import { mediaQuery } from '@/mixins/mediaQuery'
import { colors } from '@/utils/themes'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const wrapper = styled(motion.div)`
  position: fixed;
  padding: 1.5rem;
  width: 90%;
  max-width: 800px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.invertBackground};
  z-index: 101;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${mediaQuery(
  'Mobile',
  `
    padding: 3rem;
  `
)}
`
export const formHeading = styled.h1`
  border-bottom: 1px solid;
  padding-bottom: 10px;
  ${mediaQuery(
  'Tablet',
  `
  ${px(48)};
`
)}
  ${mediaQuery(
  'Mobile',
  `
  ${px(72)};
`
)}
`

export const form = styled.form<{ enctype: string }>`
  position: relative;
  border: 1px solid ${({ theme }) => theme.invertBackground};
  padding: 1rem;
  ${mediaQuery(
  'Tablet',
  `
    padding: 2rem;
  `
)}
  ${mediaQuery(
  'Mobile',
  `
    padding: 3rem;
  `
)}
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
interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
}
export const close = styled.span<ButtonProps>`
  cursor: pointer;
  position: absolute;
  ${px(25)};
  right: 1.5rem;
  top: 1.5rem;
  ${mediaQuery(
  'Tablet',
  `
  ${px(60)};
  right: 2rem;
  top: 1.5rem;
`
)}
  ${mediaQuery(
  'Mobile',
  `
  ${px(80)};
  right: 3rem;
  top: 3rem;
`
)}
  transition: color 0.15s;
  &:hover {
    color:${colors.pink};
  }
`

import React, { FunctionComponent, useState } from 'react'
import * as Styled from './ThemeToggler.styled'
import { Variants } from 'framer-motion'
interface Props {
  theme: string
  toggleTheme: () => void
}
const variants: Variants = {
  on: { left: 4, position: 'absolute' },
  off: { right: 4, position: 'absolute' },
}
export const ThemeToggler: FunctionComponent<Props> = ({ toggleTheme }) => {
  const [darkModeOn, setDarkModeOn] = useState<boolean>(false)

  const handleToggleClick = () => {
    setDarkModeOn(!darkModeOn)
    toggleTheme()
  }

  return (
    <Styled.wrapper onClick={handleToggleClick}>
      <Styled.toggleBackground>
        <Styled.toggleIcon
          variants={variants}
          animate={darkModeOn ? 'on' : 'off'}
          transition={{}}
        ></Styled.toggleIcon>
      </Styled.toggleBackground>
    </Styled.wrapper>
  )
}

import React, { FunctionComponent, useState } from 'react'
import * as Styled from './ThemeToggler.styled'
import { Variants } from 'framer-motion'
import { useWindowResize } from '@/hooks/useWindowResize'
import { useThemeStore } from '@/store/theme'

const variants: Variants = {
  on: { left: 4, position: 'absolute' },
  off: { right: 4, position: 'absolute' },
}

export const ThemeToggler: FunctionComponent = () => {
  const [darkModeOn, setDarkModeOn] = useState<boolean>(false)
  const windowSize = useWindowResize()
  const { toggleTheme } = useThemeStore()

  const handleToggleClick = () => {
    setDarkModeOn(!darkModeOn)
    toggleTheme()
  }
  return (
    <Styled.wrapper key={windowSize.width} onClick={handleToggleClick}>
      <Styled.toggleBackground>
        <Styled.toggleIcon
          variants={variants}
          animate={darkModeOn ? 'on' : 'off'}
          transition={{ type: 'spring', duration: 0.2 }}
        ></Styled.toggleIcon>
      </Styled.toggleBackground>
    </Styled.wrapper>
  )
}

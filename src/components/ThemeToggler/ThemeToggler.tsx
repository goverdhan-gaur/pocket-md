import React, { FunctionComponent, useEffect, useState } from 'react'
import * as Styled from './ThemeToggler.styled'
import { Variants } from 'framer-motion'
import { useWindowResize } from '@/hooks/useWindowResize'

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
  const windowSize = useWindowResize()
  const handleToggleClick = () => {
    setDarkModeOn(!darkModeOn)
    toggleTheme()
  }

  useEffect(() => {
    console.log(windowSize.width)
  }, [windowSize.width])

  return (
    <Styled.wrapper key={windowSize.width} onClick={handleToggleClick}>
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

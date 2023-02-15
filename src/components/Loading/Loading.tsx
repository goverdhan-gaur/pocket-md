import React, { FunctionComponent } from 'react'
import * as Styled from './Loading.styled'
import { Variants } from 'framer-motion'

type Props = {
  //
}

const item: Variants = {
  initial: {
    scale: 1,
  },
  final: (i) => ({
    scale: 0.5,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse',
      delay: i * 0.3,
    },
  }),
}
export const Loading: FunctionComponent<Props> = () => {
  return (
    <Styled.wrapper>
      <Styled.left
        variants={item}
        initial="initial"
        animate="final"
        custom={1}
      />
      <Styled.center
        variants={item}
        initial="initial"
        animate="final"
        custom={2}
      />
      <Styled.right
        variants={item}
        initial="initial"
        animate="final"
        custom={3}
      />
    </Styled.wrapper>
  )
}

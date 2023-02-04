import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Container } from './Container'

export default {
  title: 'Container',
  component: Container,
} as ComponentMeta<typeof Container>

export const Primary = () => <Container title="test" />

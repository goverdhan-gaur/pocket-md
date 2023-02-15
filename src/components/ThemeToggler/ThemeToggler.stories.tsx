import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { ThemeToggler } from './ThemeToggler'

export default {
  title: 'ThemeToggler',
  component: ThemeToggler,
} as ComponentMeta<typeof ThemeToggler>

export const Primary = () => <ThemeToggler title="test" />
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { HomePage } from './HomePage'

export default {
  title: 'Homepage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>

export const Primary = () => <HomePage title="abcd" />

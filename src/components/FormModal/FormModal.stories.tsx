import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { FormModal } from './FormModal'

export default {
  title: 'FormModal',
  component: FormModal,
} as ComponentMeta<typeof FormModal>

export const Primary = () => <FormModal title="test" />
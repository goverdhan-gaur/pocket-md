import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { ArticleList } from './ArticleList'

export default {
  title: 'ArticleList',
  component: ArticleList,
} as ComponentMeta<typeof ArticleList>

export const Primary = () => <ArticleList title="test" />
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { ArticleListItem } from './ArticleListItem'

export default {
  title: 'ArticleListItem',
  component: ArticleListItem,
} as ComponentMeta<typeof ArticleListItem>

export const Primary = () => <ArticleListItem article={article} />

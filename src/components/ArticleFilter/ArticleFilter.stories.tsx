import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { ArticleFilter } from './ArticleFilter'

export default {
  title: 'ArticleFilter',
  component: ArticleFilter,
} as ComponentMeta<typeof ArticleFilter>

export const Primary = () => (
  <ArticleFilter
    filters={['All', 'One']}
    activeFilter="All"
    onFilterClick={() => {}}
  ></ArticleFilter>
)

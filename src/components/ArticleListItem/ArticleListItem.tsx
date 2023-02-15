import React, { FunctionComponent, memo } from 'react'
import * as Styled from './ArticleListItem.styled'
import { Article } from '@/pages'
import { Image } from '../Image/Image'

interface Props {
  article: Article
  index: number
}

export const ArticleListItem: FunctionComponent<Props> = memo((props) => {
  const { article, index } = props
  const url = article.url

  return (
    <Styled.wrapper>
      <Styled.sNo>{index + 1}</Styled.sNo>
      <Image src={url} alt="asdas" />
      <Styled.meta>
        <Styled.title>{article.title}</Styled.title>
        <Styled.description>{article.text}</Styled.description>
        <Styled.link href="/">Read the article</Styled.link>
      </Styled.meta>
    </Styled.wrapper>
  )
})

ArticleListItem.displayName = 'ArticleListItem'

export default ArticleListItem

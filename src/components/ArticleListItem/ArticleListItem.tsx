import React, { FunctionComponent, memo } from 'react'
import * as Styled from './ArticleListItem.styled'
import { Article, ArticleType } from '@/pages'
import { ImageComponent } from '../Image/ImageComponent'

interface Props {
  article: Article
  index: number
  articleType: ArticleType
}

export const ArticleListItem: FunctionComponent<Props> = memo((props) => {
  const { article, articleType } = props
  const url = article.url

  return (
    <Styled.wrapper>
      <ImageComponent url={url} alt={article.title} articleType={articleType} />
      <Styled.meta>
        <Styled.title>{article.title}</Styled.title>
        <Styled.description>{article.text}</Styled.description>
        <Styled.link
          href={article.url ? article.url : 'https://www.google.com/404'}
          target="_blank"
        >
          Read the article
        </Styled.link>
      </Styled.meta>
    </Styled.wrapper>
  )
})

ArticleListItem.displayName = 'ArticleListItem'

export default ArticleListItem

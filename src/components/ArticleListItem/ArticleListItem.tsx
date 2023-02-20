import React, { FunctionComponent, memo } from 'react'
import * as Styled from './ArticleListItem.styled'
import { ImageComponent } from '../ImageComponent/ImageComponent'
import { Article } from '@/Interfaces/article'
import { ArticleType } from '@/Interfaces/types'
import { useInView } from 'react-intersection-observer'
interface Props {
  article: Article
  index: number
  articleType: ArticleType
}

export const ArticleListItem: FunctionComponent<Props> = memo((props) => {
  const { article, articleType } = props
  const url = article.url
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  const squareVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', duration: 1 },
    },
    hidden: { opacity: 0, y: 200 },
  }

  return (
    <Styled.wrapper
      ref={ref}
      variants={squareVariants}
      initial="hidden"
      animate={inView && 'visible'}
    >
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

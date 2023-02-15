import React, { FunctionComponent, useContext } from 'react'
import * as Styled from './ArticleListItem.styled'
import { Article } from '@/pages'
import type { ImageLoaderProps } from 'next/image'
import { ThemeContext } from 'styled-components'
interface Props {
  article: Article
}

export const ArticleListItem: FunctionComponent<Props> = (props) => {
  const theme = useContext(ThemeContext)

  const { article } = props
  const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${article.url}/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <Styled.wrapper theme={theme}>
      <Styled.imageContainer>
        <Styled.image
          loader={myLoader}
          src="me.png"
          alt="Picture of the author"
          layout="fill"
        />
      </Styled.imageContainer>
      <Styled.meta>
        <Styled.title>{article.title}</Styled.title>
        <Styled.description>{article.text}</Styled.description>
        <Styled.link href="/">Read the article</Styled.link>
      </Styled.meta>
    </Styled.wrapper>
  )
}

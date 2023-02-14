import React, { FunctionComponent } from 'react'
import * as Styled from './ArticleListItem.styled'
import { Article } from '@/pages'
import Image from 'next/image'
import type { ImageLoaderProps } from 'next/image'

interface Props {
  article: Article
}

export const ArticleListItem: FunctionComponent<Props> = (props) => {
  const { article } = props
  const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${article.url}/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <Styled.wrapper>
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
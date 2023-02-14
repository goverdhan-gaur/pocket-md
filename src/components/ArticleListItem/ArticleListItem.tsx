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
      <Styled.image>
        <Image
          loader={myLoader}
          src="me.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </Styled.image>
      <Styled.meta>
        <Styled.title>{article.title}</Styled.title>
        <Styled.description></Styled.description>
        <Styled.link href="/"></Styled.link>
      </Styled.meta>
    </Styled.wrapper>
  )
}

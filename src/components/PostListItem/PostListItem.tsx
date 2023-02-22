import React, { FunctionComponent } from 'react'
import * as Styled from './PostListItem.styled'
import { FormData } from '@/store/modal'
import { ImageComponent } from '../ImageComponent/ImageComponent'

type Props = {
  //
  post: FormData
}

export const PostListItem: FunctionComponent<Props> = ({ post }) => {
  return (
    <Styled.wrapper>
      <Styled.imgWrapper>
        <ImageComponent url={post.imgUrl} articleType="internal" />
        {/* <Styled.img src={post.imgUrl} /> */}
      </Styled.imgWrapper>
      <Styled.postMeta>
        <Styled.title>{post.title}</Styled.title>
        <Styled.description>{post.description}</Styled.description>
        <Styled.url href={post.url} target="_blank">
          Read More
        </Styled.url>
      </Styled.postMeta>
    </Styled.wrapper>
  )
}

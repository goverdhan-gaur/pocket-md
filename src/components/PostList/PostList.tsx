import React, { FunctionComponent } from 'react'
import * as Styled from './PostList.styled'
import { PostListItem } from '../PostListItem/PostListItem'
import { FormData } from '@/store/modal'
import { Loading } from '../Loading/Loading'

type Props = {
  //
  posts: FormData[] | undefined
}

export const PostList: FunctionComponent<Props> = ({ posts }) => {
  return (
    <Styled.wrapper>
      {posts ? (
        posts.map((post: FormData, i: number) => {
          return <PostListItem key={`post_${i}`} post={post} />
        })
      ) : (
        <Loading />
      )}
    </Styled.wrapper>
  )
}

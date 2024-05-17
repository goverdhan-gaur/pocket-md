import React, { FunctionComponent, useEffect, useState } from 'react'
import * as Styled from './PostModal.styled'
import { FormData, useModalStore } from '@/store/modal'
import { useFirebase } from '@/hooks/useFirebase'
import { PostList } from '../PostList/PostList'
import { FaWindowClose } from 'react-icons/fa';
type Props = {
  //
}

export const PostModal: FunctionComponent<Props> = () => {
  const { fetchedPosts } = useFirebase()
  const [posts, setPosts] = useState<FormData[]>()

  useEffect(() => {
    const convertPostArray = fetchedPosts && Object.values(fetchedPosts)
    convertPostArray && setPosts(convertPostArray)
  }, [fetchedPosts])

  const { closeModal } = useModalStore()

  return (
    <>
      <Styled.Backdrop onClick={closeModal} />
      <Styled.wrapper>
        <Styled.close onClick={closeModal}>
          <FaWindowClose />
        </Styled.close>
        <Styled.formHeading>Posts</Styled.formHeading>
        {fetchedPosts ? <PostList posts={posts}></PostList> : 'No Posts Available'}
      </Styled.wrapper>
    </>
  )
}

import React, { FunctionComponent, useEffect, useState } from 'react'
import * as Styled from './Image.styled'
import { useImageUrls } from '@/hooks/useImageUrl'
import { Loading } from '../Loading/Loading'

interface Image {
  src: string
  alt?: string
}

export const Image: FunctionComponent<Image> = ({ src }) => {
  const [image, setImage] = useState('')
  const imageUrls = useImageUrls(src, image)
  // console.info('-------')
  // console.log('title', article.title)
  // console.log('url', article.url)
  // console.log('imageUrl', image)
  // console.info('-------')
  useEffect(() => {
    if (!image && imageUrls) {
      setImage(imageUrls)
    }
  }, [imageUrls])
  return (
    <Styled.imageContainer>
      {image ? (
        <Styled.image loading="lazy" src={image} alt="Picture of the author" />
      ) : (
        <Styled.innerContainer>
          <Loading />
        </Styled.innerContainer>
      )}
    </Styled.imageContainer>
  )
}

import React, { FunctionComponent, useEffect, useState } from 'react'
import * as Styled from './ImageComponent.styled'
import { useImageUrls } from '@/hooks/useImageUrl'
import { ArticleType } from '@/Interfaces/types'
import { useInView } from 'react-intersection-observer'
interface ImageProps {
  url: string
  alt?: string
  articleType: ArticleType
}

export const ImageComponent: FunctionComponent<ImageProps> = ({
  url,
  articleType,
  alt,
}) => {
  const [ref, inView] = useInView()
  const [image, setImage] = useState<string>('')
  const imageUrls = useImageUrls(url, inView)

  useEffect(() => {
    if (articleType === 'internal') {
      setImage(url)
    } else if (imageUrls) {
      setImage(imageUrls)
    }
  }, [articleType, imageUrls, url])

  return (
    <Styled.imageContainer ref={ref}>
      {image && inView ? (
        <Styled.image src={image} alt={alt || 'Image'} />
      ) : (
        <Styled.innerContainer>
          <Styled.loading />
        </Styled.innerContainer>
      )}
    </Styled.imageContainer>
  )
}

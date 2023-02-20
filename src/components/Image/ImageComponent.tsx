import React, { FunctionComponent, useEffect, useState, useRef } from 'react'
import * as Styled from './ImageComponent.styled'
import { useImageUrls } from '@/hooks/useImageUrl'
import { ArticleType } from '@/Interfaces/types'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'

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
  const componentRef = useRef<HTMLDivElement>(null)
  const [image, setImage] = useState<string>('')
  const isVisible = useIntersectionObserver(componentRef, { threshold: 0.1 })
  const imageUrls = useImageUrls(url, isVisible)

  useEffect(() => {
    if (articleType === 'internal') {
      setImage(url)
    } else if (imageUrls) {
      setImage(imageUrls)
    }
  }, [articleType, imageUrls, url])

  return (
    <Styled.imageContainer ref={componentRef}>
      {image && isVisible ? (
        <Styled.image src={image} alt={alt || 'Image'} />
      ) : (
        <Styled.innerContainer>
          <Styled.loading />
        </Styled.innerContainer>
      )}
    </Styled.imageContainer>
  )
}

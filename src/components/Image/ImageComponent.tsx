import React, { FunctionComponent, useEffect, useState } from 'react'
import * as Styled from './ImageComponent.styled'
import { useImageUrls } from '@/hooks/useImageUrl'
import Image, { ImageLoader } from 'next/image'
import { ArticleType } from '@/Interfaces/types'

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
  const [image, setImage] = useState('')
  const imageUrls = useImageUrls(url, image)

  // Define loader function based on the type prop
  const loader: ImageLoader | undefined =
    articleType === 'internal'
      ? ({ src, width, quality }) =>
          `${url}/${src}?w=${width}&q=${quality || 75}`
      : undefined

  useEffect(() => {
    console.log(loader)
    if (!image && imageUrls && articleType === 'external') {
      setImage(imageUrls)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrls])

  return (
    <Styled.imageContainer>
      {articleType === 'internal' &&
        (loader ? (
          <Image
            loader={loader}
            src="/me.png"
            alt={alt || 'Image'}
            layout="fill"
          />
        ) : (
          <Styled.innerContainer>
            <Styled.loading />
          </Styled.innerContainer>
        ))}
      {articleType === 'external' &&
        (image ? (
          <Styled.image loading="lazy" src={image} alt={alt || 'Image'} />
        ) : (
          <Styled.innerContainer>
            <Styled.loading />
          </Styled.innerContainer>
        ))}
    </Styled.imageContainer>
  )
}

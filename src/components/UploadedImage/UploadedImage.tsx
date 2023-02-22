import React, { FunctionComponent } from 'react'
import * as Styled from './UploadedImage.styled'

type Props = {
  //
  src: string
  imgPath: string
  deleteImg: (arg: string) => void
}

export const UploadedImage: FunctionComponent<Props> = ({
  src,
  imgPath,
  deleteImg,
}) => {
  const handleClearClick = () => {
    deleteImg(imgPath)
  }

  return (
    <>
      <Styled.label>Image:</Styled.label>
      <Styled.wrapper>
        <Styled.imgWrapper>
          <Styled.delIcon onClick={handleClearClick} />
          <Styled.image src={src} />
        </Styled.imgWrapper>
      </Styled.wrapper>
    </>
  )
}

import { aspectRatioContainer, aspectRatioImage } from '@/mixins/aspectRatio';
import styled from 'styled-components'

export const wrapper = styled.div``;
export const image = styled.img`
  height: 100%;
  ${aspectRatioImage}
`


export const innerContainer = styled.div`
    ${aspectRatioImage}
`

export const imageContainer = styled.div`
  ${aspectRatioContainer('4:3')}
`   
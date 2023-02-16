import { aspectRatioContainer, aspectRatioImage } from '@/mixins/aspectRatio';
import styled from 'styled-components'
import { Loading } from '../Loading/Loading';

export const wrapper = styled.div``;

export const innerContainer = styled.div`
    ${aspectRatioImage}
    display: grid;
    place-items: center;
`

export const imageContainer = styled.div`
  ${aspectRatioContainer('4:3')}
  background: #ffffff30

`
export const image = styled.img`
  height: 100%;
  margin: auto;
  width:100%;
  ${aspectRatioImage}
`
export const loading = styled(Loading)`
`
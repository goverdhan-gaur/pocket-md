// import { aspectRatioContainer, aspectRatioImage } from '@/mixins/aspectRatio'
import { px } from '@/mixins/getRemFontSize'
import Link from 'next/link'
import styled from 'styled-components'
import { mediaQuery } from '@/mixins/mediaQuery'

export const wrapper = styled.div`
  padding: 2rem 0 3rem;
  border-bottom: ${props => `1px solid ${props.theme.invertBackground}`};
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  ${mediaQuery(
  'Mobile', `
        grid-template-columns: 1fr;
    `
)}
color: ${props => props.theme.invertBackground};
`

export const title = styled.h2`
  ${px(28)}
  font-weight: 500;
  ${mediaQuery(
  'Mobile',
  `
        ${px(98)}
    `
)}
`

export const description = styled.p`
  margin: 1.54rem 0;
  font-weight: 200;
  ${px(14)}
  ${mediaQuery(
  'Mobile',
  `
        margin: 3rem 0;
        ${px(56)}
    `
)}
`

export const link = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  ${px(12)}
  position: relative;
  color: ${props => props.theme.invertBackground};
  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -3px;
  }

  &:before {
    background: ${props => `${props.theme.invertBackground}20`};
  }

  &:after {
    background: ${props => `${props.theme.invertBackground}`};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }

  ${mediaQuery(
  'Mobile',
  `
        &:after {
            transition: unset;
        }

        ${px(36)}
    `
)}
`

export const meta = styled.div``


export const sNo = styled.p`
      position: absolute
`
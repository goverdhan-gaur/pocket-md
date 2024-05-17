import { px } from '@/mixins/getRemFontSize';
import { mediaQuery } from '@/mixins/mediaQuery';
import styled from 'styled-components'
interface ImageProps {
    src: string
}
export const wrapper = styled.div`width: 100%;
display: flex;
justify-content: center`;

export const image = styled.img<ImageProps>`
width: 20rem;
max-width: 200px;
margin: 0 auto;
`

export const imgWrapper = styled.div`
    position: relative;
`

export const label = styled.p`
    position: relative;
    ${px(14)};
    ${mediaQuery(
    'Tablet',
    `
      ${px(30)}
    `
)};
    ${mediaQuery(
    'Mobile',
    `
  ${px(40)}
  `
)}
`

interface delIconProps {
    onClick: () => void
}
export const delIcon = styled.div<delIconProps>`
    position:absolute;
    background: red;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    right: -10px;
    top: -10px;
    transform: rotate(-45deg);
    cursor: pointer;

    &:after, &:before {
        content: "";
        position: absolute;
        width: 2px;
        height: 60%;
        background: white;
    }

    &:after {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-90deg);
    }

    &:before {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`
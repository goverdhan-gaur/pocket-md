import { aspectRatioContainer, aspectRatioImage } from '@/mixins/aspectRatio';
import { px } from '@/mixins/getRemFontSize';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { mediaQuery } from '@/mixins/mediaQuery';

export const wrapper = styled.div`
    padding: 2rem 0 3rem;
    border-bottom: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    ${mediaQuery('Mobile', `
        grid-template-columns: 1fr;
    `)}
`;

export const imageContainer = styled.div`
    ${aspectRatioContainer("4:3")}
`;

export const image = styled(Image)`
    ${aspectRatioImage}
`;

export const title = styled.h2`
    ${px(36)}
    font-weight: 500;
    ${mediaQuery('Mobile', `
        ${px(98)}
    `)}
`;

export const description = styled.p`
    margin: 1.54rem 0;
    ${px(20)}
    ${mediaQuery('Mobile', `
        margin: 3rem 0;
        ${px(56)}
    `)}
`;

export const link = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    position: relative;
    color: black;

    &:after, &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1.5px;
        left: 0;
        bottom: -3px;
    }

    &:before {
        background: rgba(0,0,0,0.2)
    }

    &:after {
        background: black;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.3s ease-in-out;
    }

    &:hover:after {
        transform: scaleX(1);
        transform-origin: left;
    }

    ${mediaQuery('Mobile', `
        &:after {
            transition: unset;
        }

        ${px(48)}
    `)}
`;

export const meta = styled.div`
  
`;

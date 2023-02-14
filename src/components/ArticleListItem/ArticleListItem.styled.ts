import { px } from '@/mixins/getRemFontSize';
import Link from 'next/link';
import styled from 'styled-components'

export const wrapper = styled.div`
    padding: 2rem 0 3rem;
    border-bottom: 1px solid black;
    ${px(20)}
`;

export const image = styled.div``;
export const meta = styled.div``;
export const title = styled.h2``;
export const description = styled.p``;
export const link = styled(Link)``;

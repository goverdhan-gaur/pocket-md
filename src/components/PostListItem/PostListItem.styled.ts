import styled from 'styled-components'
import { link } from '../ArticleListItem/ArticleListItem.styled'
import { mediaQuery } from '@/mixins/mediaQuery'
import { px } from '@/mixins/getRemFontSize'

export const wrapper = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.backgroundTransparent};
  padding: 1rem;
  margin-bottom: 1rem;
  gap: 1rem;
  ${mediaQuery('Tablet', 'gap: 2rem;')}
  ${mediaQuery('Mobile', 'flex-direction: column')}
`

export const postMeta = styled.div`
  flex: 1;
  padding: 2rem;
`

export const imgWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  margin: auto;
`

export const title = styled.h3`
  text-transform: capitalize;

  ${mediaQuery(
    'Tablet',
    `
        ${px(40)}
    `
)}
  ${mediaQuery(
    'Mobile',
    `
        ${px(68)}
    `
)}
`

export const description = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  ${mediaQuery(
    'Tablet',
    `
        ${px(26)}
        margin-top: 1rem;
        margin-bottom: 2rem;    
    `
)}
  ${mediaQuery(
    'Mobile',
    `
    ${px(40)}
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;

`
)}
`

export const url = styled(link)`
  ${mediaQuery(
    'Tablet',
    `
${px(20)}
`
)}${mediaQuery(
    'Mobile',
    `
${px(40)}
`
)}
`

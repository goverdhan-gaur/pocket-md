import styled from 'styled-components'
import { link } from '../ArticleListItem/ArticleListItem.styled'
import { mediaQuery } from '@/mixins/mediaQuery'
import { px } from '@/mixins/getRemFontSize'

export const wrapper = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.backgroundTransparent};
  padding: 0 1rem;
  margin-bottom: 1rem;
  gap: 1rem;
  ${mediaQuery('Tablet', 'gap: 2rem;')}
  ${mediaQuery('Mobile', 'flex-direction: column; gap: 0;')}
`

export const postMeta = styled.div`
  flex: 1;
  padding: 1rem 1rem 1rem 0.5rem;
  ${mediaQuery('Mobile', 'padding: 3rem')}

`

export const imgWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  margin: 0 auto;
  padding: 1rem 0;
  ${mediaQuery('Mobile', 'padding: 3rem 3rem 0 3rem; max-width: unset;')}
`

export const title = styled.h3`
  text-transform: capitalize;
  font-size:20px;
  ${mediaQuery(
  'Tablet',
  `
        ${px(50)}
    `
)}
  ${mediaQuery(
  'Mobile',
  `
        ${px(70)}
    `
)}
`

export const description = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  font-size:14px;
  ${mediaQuery(
  'Tablet',
  `
        ${px(30)}
        margin-top: 1rem;
        margin-bottom: 2rem;    
    `
)}
  ${mediaQuery(
  'Mobile',
  `
    ${px(48)}
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;

`
)}
`

export const url = styled(link)`
font-size:12px;
  ${mediaQuery(
  'Tablet',
  `
${px(25)}
`
)}${mediaQuery(
  'Mobile',
  `
${px(48)}
`
)}
`

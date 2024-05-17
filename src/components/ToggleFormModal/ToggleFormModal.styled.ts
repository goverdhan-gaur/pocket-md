import { px } from '@/mixins/getRemFontSize'
import { mediaQuery } from '@/mixins/mediaQuery'
import { FaPlus } from 'react-icons/fa6'
import styled from 'styled-components'

export const wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;

`
export const label = styled.p`
  color: ${({ theme }) => theme.invertColor};
  
  ${mediaQuery(
  'Mobile',
  ` 
        display: none;
    `
)};
`
export const iconWrapper = styled(FaPlus)`
  color: ${({ theme }) => theme.invertColor};
`
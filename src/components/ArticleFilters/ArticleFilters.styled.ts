import { px } from '@/mixins/getRemFontSize';
import { mediaQuery } from '@/mixins/mediaQuery';
import { ReactNode } from 'react';
import styled from 'styled-components'

interface filterListItemProps {
  isActive: boolean;
  id: string;
  onClick: React.MouseEvent<HTMLLIElement>;
  children?: ReactNode;
}

interface filterListProps {
  showfilters: boolean;
  children?: ReactNode;
}

export const filterList = styled.ul<filterListProps>`
  ${({ showfilters }) => (showfilters ? '--p-y: 18px;' : '--p-y: 0;')};
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 16px;
  list-style-type: none;
  ${px(20)}
  padding: var(--p-y) 0;
`

filterList.defaultProps = {
  showfilters: false,

}

export const filterListItem = styled.li<filterListItemProps>`
  width: fit-content;
  text-align: center;
  padding: 6px 16px;
  cursor: pointer;
  font-size:20px;
  -webkit-border-radius: 10rem;
  -moz-border-radius: 10rem;
  border-radius: 10rem;
  text-transform: capitalize;


  background-color: ${(props) =>
    props.isActive
      ? props.theme.highlightColor
      : props.theme.background};
  border: ${(props) => `2px solid ${props.theme.highlightColor}`};
  color: ${(props) =>
    props.isActive ? props.theme.invertColor : props.theme.color};

  &:hover {
    background-color: ${(props) =>
    props.isActive
      ? props.theme.highlightColor
      : `${props.theme.highlightColor}30`};
  }

  ${mediaQuery('Mobile', `
  font-size:14px;

    `)}
`

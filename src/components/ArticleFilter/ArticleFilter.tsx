import React, { FunctionComponent } from 'react'
import * as Styled from './ArticleFilter.styled'

interface Props {
  filters: string[]
  activeFilter: string
  onFilterClick: Function
}

export const ArticleFilter: FunctionComponent<Props> = ({
  filters,
  onFilterClick,
  activeFilter,
}) => {
  const filterClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLDivElement
    onFilterClick(target.id)
  }

  return (
    <Styled.wrapper>
      <Styled.filterList>
        {filters.map((filter) => (
          <Styled.filterListItem
            key={filter}
            id={filter}
            onClick={filterClickHandler}
            isActive={activeFilter === filter}
          >
            {filter}
          </Styled.filterListItem>
        ))}
      </Styled.filterList>
    </Styled.wrapper>
  )
}

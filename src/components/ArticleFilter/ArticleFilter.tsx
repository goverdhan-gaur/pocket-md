import React, { FunctionComponent } from 'react'
import * as Styled from './ArticleFilter.styled'
import { ThemeToggler } from '../ThemeToggler/ThemeToggler'
import { ToggleFormModal } from '../ToggleFormModal/ToggleFormModal'

interface Props {
  filters: string[]
  activeFilter: string
  onFilterClick: (id: string) => void
}

export const ArticleFilter: FunctionComponent<Props> = (props) => {
  const { onFilterClick, filters, activeFilter } = props
  const showFilters = filters.length > 2
  const filterClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLDivElement
    onFilterClick(target.id)
  }

  return (
    <Styled.wrapper>
      <ToggleFormModal />
      <Styled.filterList showfilters={showFilters}>
        {filters.length > 2 &&
          filters.map((filter) => (
            <Styled.filterListItem
              key={filter}
              id={filter}
              onClick={filterClickHandler}
              isActive={Boolean(activeFilter === filter)}
            >
              {filter}
            </Styled.filterListItem>
          ))}
      </Styled.filterList>
      <ThemeToggler />
    </Styled.wrapper>
  )
}

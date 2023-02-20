import React, { FunctionComponent, useContext } from 'react'
import * as Styled from './ArticleFilter.styled'
import { ThemeToggler } from '../ThemeToggler/ThemeToggler'
import { ThemeContext } from 'styled-components'
// import { ToggleFormModal } from '../ToggleFormModal/ToggleFormModal'

interface Props {
  filters: string[]
  activeFilter: string
  onFilterClick: (id: string) => void
  toggleTheme: () => void
}

export const ArticleFilter: FunctionComponent<Props> = (props) => {
  const { onFilterClick, filters, activeFilter, toggleTheme } = props
  const showFilters = filters.length > 2
  const filterClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLDivElement
    onFilterClick(target.id)
  }

  const { theme } = useContext(ThemeContext)
  return (
    <Styled.wrapper>
      {/* <ToggleFormModal /> */}
      <Styled.filterList showfilters={showFilters}>
        {filters.length > 2 &&
          filters.map((filter) => (
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
      <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
    </Styled.wrapper>
  )
}

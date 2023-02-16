import React, { FunctionComponent, useContext } from 'react'
import * as Styled from './ArticleFilter.styled'
import { ThemeToggler } from '../ThemeToggler/ThemeToggler'
import { ThemeContext } from 'styled-components'
import { ToggleFormModal } from '../ToggleFormModal/ToggleFormModal'

interface Props {
  filters: string[]
  activeFilter: string
  onFilterClick: (id: string) => void
  toggleTheme: () => void
}

export const ArticleFilter: FunctionComponent<Props> = (props) => {
  const { onFilterClick, filters, activeFilter, toggleTheme } = props
  const filterClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLDivElement
    onFilterClick(target.id)
  }

  const { theme } = useContext(ThemeContext)
  return (
    <Styled.wrapper>
      <ToggleFormModal />
      <Styled.filterList>
        {filters.map((filter) => (
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
      <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
    </Styled.wrapper>
  )
}

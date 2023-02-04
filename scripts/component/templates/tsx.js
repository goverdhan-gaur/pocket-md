const tsxTemplate = (name) => `import React, { FunctionComponent } from 'react'
import * as Styled from './${name}.styled'

type Props = {
  //
  title: string
}

export const ${name}: FunctionComponent<Props> = ({ title = 'title' }) => {
  return <Styled.wrapper>{title}</Styled.wrapper>
}`

module.exports = tsxTemplate

const storiesTemplate = (name) => `import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { ${name} } from './${name}'

export default {
  title: '${name}',
  component: ${name},
} as ComponentMeta<typeof ${name}>

export const Primary = () => <${name} title="test" />`

module.exports = storiesTemplate

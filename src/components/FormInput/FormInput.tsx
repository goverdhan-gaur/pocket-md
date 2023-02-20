import React, { FunctionComponent } from 'react'
import * as Styled from './FormInput.styled'

type InputTypes =
  | 'text'
  | 'file'
  | 'number'
  | 'date'
  | 'file'
  | 'textarea'
  | 'url'
  | 'submit'

type Props = {
  //
  type?: InputTypes
  name?: string
  id?: string
  required?: boolean
  label?: string
  value?: string
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  accept?: string
}

export const FormInput: FunctionComponent<Props> = ({
  type = 'text',
  accept,
  name,
  id,
  required = false,
  label,
  value,
  onChange,
}) => {
  const getInput = () => {
    switch (type) {
      case 'textarea':
        return <Styled.textarea name={name} id={id} />
      default:
        return (
          <Styled.input
            type={type}
            name={name}
            id={id}
            required={required}
            value={value}
            onChange={onChange}
            accept={accept}
          />
        )
    }
  }

  return (
    <>
      <Styled.formGroup>
        <Styled.label>{label}</Styled.label>
        {getInput()}
      </Styled.formGroup>
    </>
  )
}

import React, { FunctionComponent, useState } from 'react'
import * as Styled from './FormInput.styled'
import { Validations, validateInput } from '@/utils/validation'
import _ from 'lodash'

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
  label?: string
  value?: string
  validations?: Validations
  accept?: string
  onChange?: (event: React.FormEvent) => void
  setError?: (err: boolean) => void
}

export const FormInput: FunctionComponent<Props> = ({
  type = 'text',
  accept,
  name,
  id,
  label,
  value,
  validations,
  onChange,
  setError,
}) => {
  const [hasError, setHasError] = useState<boolean>()
  const [errorMessage, setErrorMessage] = useState<string>()

  const handleInputChange = (event: React.FormEvent) => {
    const value = _.get(event, 'target.value', '')

    if (validations) {
      const { hasError, errorMessage } = validateInput({
        value,
        validations: validations,
      })

      setHasError(hasError)
      errorMessage && setErrorMessage(errorMessage)
      setError && setError(hasError)
    }
  }

  const getInput = (validations: Validations = {}) => {
    switch (type) {
      case 'textarea':
        return (
          <Styled.textarea
            onChange={onChange || handleInputChange}
            name={name}
            id={id}
            rows={5}
            required={validations.required}
          />
        )
      default:
        return (
          <Styled.input
            type={type}
            name={name}
            id={id}
            value={value}
            required={validations.required}
            onChange={onChange || handleInputChange}
            accept={accept}
          />
        )
    }
  }

  return (
    <>
      <Styled.formGroup>
        <Styled.label>
          {label}
          {validations?.required && <Styled.star> *</Styled.star>}
        </Styled.label>
        {getInput(validations)}
        {hasError && <Styled.message>{errorMessage}</Styled.message>}
      </Styled.formGroup>
    </>
  )
}

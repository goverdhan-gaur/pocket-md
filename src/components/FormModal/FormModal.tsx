import React, { FunctionComponent } from 'react'
import * as Styled from './FormModal.styled'
import { useModalStore } from '@/store/modal'
import { FormInput } from '../FormInput/FormInput'

type Props = {
  //
}
// Title, URL, description, and image
export const FormModal: FunctionComponent<Props> = () => {
  const { closeModal } = useModalStore()

  const handleFormSubmission = (event: React.FormEvent) => {
    //
    event.preventDefault()
    const target = event.target as typeof event.target & {
      title: { value: string }
      description: { value: string }
      url: { value: string }
      image: { value: any }
    }
    console.log(target.image)
  }

  const handleFileChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.target.files)
  }
  return (
    <>
      <Styled.Backdrop onClick={closeModal} />
      <Styled.wrapper>
        <Styled.formHeading>Add Post</Styled.formHeading>
        <Styled.form
          onSubmit={handleFormSubmission}
          enctype="multipart/form-data"
        >
          <FormInput name="title" label="Title" />
          <FormInput type="textarea" label="Description" name="description" />
          <FormInput type="url" label="Url" name="url" />
          <FormInput
            type="file"
            accept="image/png, image/jpeg"
            label="Image"
            name="image"
            onChange={handleFileChange}
          />
          <FormInput type="submit" />
        </Styled.form>
      </Styled.wrapper>
    </>
  )
}

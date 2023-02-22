import React, { FunctionComponent, useEffect, useState } from 'react'
import * as Styled from './FormModal.styled'
import { useModalStore } from '@/store/modal'
import { FormInput } from '../FormInput/FormInput'
import { useFirebase } from '@/hooks/useFirebase'
import _ from 'lodash'
import { ProgressBar } from '../ProgressBar/ProgressBar'
import { UploadedImage } from '../UploadedImage/UploadedImage'
import { Variants, useAnimationControls } from 'framer-motion'

type Props = {
  //
}

export const FormModal: FunctionComponent<Props> = () => {
  const {
    imgLoaded,
    imgPath,
    imgUploadProgress,
    imgUrl,
    uploadFile,
    deleteImg,
    // postFormData,
  } = useFirebase()
  const controls = useAnimationControls()
  const { formData, closeModal, setFormData } = useModalStore()
  const [hasTitleError, setHasTitleError] = useState<boolean>()
  const [hasDescriptionError, setHasDescriptionError] = useState<boolean>()
  const [hasURlError, setHasURlError] = useState<boolean>()
  const [animate, setAnimate] = useState<boolean>(false)

  useEffect(() => {
    setFormData({ imgUrl: imgUrl })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgUrl])

  const variants: Variants = {
    initial: {
      rotate: 0,
      zIndex: 100,
      transformOrigin: 'center',
      translateX: '-50%',
      translateY: '-50%',
    },
    end: {
      rotate: [1.5, 0],
      transition: {
        repeat: 2,
        duration: 0.1,
      },
    },
  }

  useEffect(() => {
    animate && controls.start('end')
    setAnimate(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate])

  const handleFormSubmission = (event: React.FormEvent) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      title: { value: string }
      description: { value: string }
      url: { value: string }
    }

    const title = _.get(target, 'title.value', null) as string
    const description = _.get(target, 'description.value', null) as string
    const url = _.get(target, 'url.value', null) as string

    const newFormData = {
      title,
      description,
      url,
    }

    if (hasTitleError || hasDescriptionError || hasURlError) {
      setAnimate(true)
    } else {
      setFormData(newFormData)
      // postFormData(formData)
    }
  }

  const handleFileUpload = (event: React.FormEvent) => {
    const file = _.get(event.target, 'files[0]', '')
    file && uploadFile(file)
  }

  const renderImgComponent =
    imgUploadProgress === 0 || (imgUploadProgress === 100 && imgLoaded) ? (
      <FormInput
        type="file"
        accept="image/png, image/jpeg"
        label="Image"
        name="image"
        onChange={handleFileUpload}
        validations={{ required: true }}
      />
    ) : (
      <ProgressBar progress={imgUploadProgress} />
    )

  return (
    <>
      <Styled.Backdrop onClick={closeModal} />

      <Styled.wrapper variants={variants} initial="initial" animate={controls}>
        <Styled.formHeading>Add Post</Styled.formHeading>
        <Styled.form
          onSubmit={handleFormSubmission}
          enctype="multipart/form-data"
        >
          <FormInput
            name="title"
            label="Title"
            validations={{ minLength: 5, required: true }}
            setError={setHasTitleError}
          />
          <FormInput
            type="textarea"
            label="Description"
            name="description"
            validations={{ minLength: 10, required: true }}
            setError={setHasDescriptionError}
          />
          <FormInput
            type="url"
            label="Url"
            name="url"
            validations={{ url: true, required: true }}
            setError={setHasURlError}
          />
          {formData.imgUrl ? (
            <UploadedImage
              imgPath={imgPath}
              deleteImg={deleteImg}
              src={formData.imgUrl}
            />
          ) : (
            renderImgComponent
          )}
          <FormInput type="submit" />
        </Styled.form>
      </Styled.wrapper>
    </>
  )
}

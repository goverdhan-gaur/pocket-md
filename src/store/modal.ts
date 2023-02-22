import { create } from 'zustand'

export interface FormData {
    title: string
    description: string
    url: string
    imgUrl: string
}

export enum modalType {
    Form,
    Posts
}
interface ModalState {
    isFormOpen: boolean
    openModal: (type: modalType) => void
    closeModal: () => void
    isListOpen: boolean
    formData: FormData
    setFormData: (arg: Partial<FormData>) => void
}

export const useModalStore = create<ModalState>()((set) => ({
    isFormOpen: false,
    formData: {
        title: '',
        description: '',
        url: '',
        imgUrl: ''
    },
    isListOpen: false,
    openModal: (type: modalType) => set(() => {
        return type === modalType.Form ?
            { isFormOpen: true, isListOpen: false } : { isListOpen: true, isFormOpen: false }
    }),
    closeModal: () => set(() => {
        return {
            formData: {
                title: '',
                description: '',
                url: '',
                imgUrl: ''
            }, isFormOpen: false,
            isListOpen: false
        }
    }),
    setFormData: (arg) => set((state) => ({ formData: { ...state.formData, ...arg } }))
}))
import styled, { css, keyframes } from 'styled-components'

const pulse = keyframes`
    0% {
        transform: scale(1)
    }
    50% {
        transform: scale(0.5)
    }
    100% {
        transform: scale(1)
    }
`
export const wrapper = styled.div`
  margin: 4rem auto;
  width: fit-content;
  display: flex;
  gap: 5px;
  & > div {
    width: 7px;
    height: 7px;
    background: black;
    border-radius: 50%;
    animation: ${pulse} 1s ease-in-out infinite;
  }
`
export const left = styled.div``
export const center = styled.div``
export const right = styled.div``

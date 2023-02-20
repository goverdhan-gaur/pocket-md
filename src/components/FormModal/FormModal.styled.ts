import styled from 'styled-components'

export const wrapper = styled.div`
  position: fixed;
  padding: 3rem;
  width: 90%;
  max-width: 1000px;
  height: 80vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.invertBackground};
  z-index: 101;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const formHeading = styled.h1``

export const form = styled.form<{ enctype: string }>`
  border: 1px solid ${({ theme }) => theme.invertBackground};
  padding: 1rem;
`

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: ${({ theme }) => theme.backgroundTransparent};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`

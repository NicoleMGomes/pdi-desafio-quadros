import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100%;
  width: 100%;

  padding: 3rem;

  img {
    margin-top: 30px;
  }

  h2 {
    color: var(--gray-dark);
    font-size: 2rem;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  padding: 3rem;

  img {
    margin: 30px;
    width: 30vw;
    height: auto;
  }

  select {
    margin-top: 30px;
  }

  h2 {
    color: var(--secondary);
    font-size: 2rem;
  }

  button {
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin-top: 30px;
  }
`

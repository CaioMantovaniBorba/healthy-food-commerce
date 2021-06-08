import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    justify-content: center;
    height: 100vh;
  }
`;

export const Left = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Right = styled.div`
  width: 400px;
  margin-right: 368px;

  h1 {
    color: #2d3561;
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 32px;
    line-height: 1.4em;
  }

  p {
    font-size: 16px;
    font-family: 'Mulish', sans-serif;
    color: #9e9baf;
    margin-bottom: 16px;
    line-height: 1.8em;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    padding: 16px;
    margin-top: 48px;
    background: var(--primary-color);
    color: #fff;
    border: 0;
    border-radius: 6px;
  }

  @media (max-width: 1024px) {
    width: 600px;
    margin-right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    width: 80%;
  }
`;

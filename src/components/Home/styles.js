import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;

  @media (max-width: 1024px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 256px;

  h1 {
    width: 330px;
    font-size: 48px;
    font-family: 'Montserrat', sans-serif;
    color: var(--secondary-color);
    margin-bottom: 24px;
    line-height: 1.6em;
  }

  div {
    display: flex;

    input {
      height: 52px;
      width: 343px;
      margin-right: 16px;
      border-radius: 4px;
      padding: 16px;
      border: 1px solid #b4b4b4;

      &::placeholder {
        font-size: 16px;
        color: #b4b4b4;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 52px;
      width: 52px;
      background: var(--primary-color);
      border: 0;
      border-radius: 4px;
      padding: 8px;
    }
  }

  @media (max-width: 767px) {
    h1 {
      font-size: 32px;
      margin-bottom: 32px;
      width: 80%;
    }

    div {
      max-width: 330px;
    }
  }

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;

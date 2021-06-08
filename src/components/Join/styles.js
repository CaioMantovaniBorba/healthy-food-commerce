import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  @media (max-width: 1024px) {
    justify-content: center;
    flex-direction: column;
    background: #fff;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 368px;

  h1 {
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    color: #2d3561;
    margin-bottom: 32px;
    width: 360px;
    line-height: 1.4em;
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
      height: 52px;
      width: 93px;
      padding: 16px 32px;
      background: var(--primary-color);
      border: none;
      border-radius: 5px;
      font-size: 16px;
      font-family: Muli;
      color: #fff;
    }
  }

  @media (max-width: 767px) {
    h1 {
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

export const Left = styled.div``;

export const Right = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

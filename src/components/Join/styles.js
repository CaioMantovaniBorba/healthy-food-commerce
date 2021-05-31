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

  @media (max-width: 1024px) {
    margin-left: 0;
  }

  h1 {
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    color: #2d3561;
    margin-bottom: 32px;
    width: 360px;
    line-height: 1.4em;

    @media (max-width: 767px) {
      width: 80%;
    }
  }

  div {
    display: flex;

    @media (max-width: 767px) {
      max-width: 330px;
    }

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
`;

export const Left = styled.div``;

export const Right = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #eee;
  padding: 64px 0;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 480px;

  @media (max-width: 767px) {
    width: 90%;
  }

  h1 {
    font-size: 32px;
    font-family: 'Montserrat', sans-serif;
    color: var(--secondary-color);
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    font-family: 'Mulish', sans-serif;
    color: #9e9baf;
    margin-bottom: 32px;
    line-height: 1.8em;
    text-align: center;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  column-gap: 16px;
  row-gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    row-gap: 32px;
  }
`;

export const Card = styled.div`
  display: flex;
  width: 480px;
  background: #fff;
  border-radius: 8px;

  @media (max-width: 767px) {
    width: 300px;
    flex-direction: column;
  }

  img {
    margin-right: 16px;

    @media (max-width: 767px) {
      width: 100%;
      border-radius: 8px;
    }
  }

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 767px) {
      align-items: center;
    }

    h1 {
      color: var(--secondary-color);
      font-size: 24px;
      font-family: 'Montserrat', sans-serif;
      margin-bottom: 8px;
      width: 200px;
      line-height: 1.4em;

      @media (max-width: 767px) {
        font-size: 20px;
        width: 100%;
        margin: 16px 0;
        text-align: center;
      }
    }

    button {
      height: 48px;
      width: 134px;
      background: var(--primary-color);
      font-size: 16px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      font-family: 'Mulish', sans-serif;
      color: #fff;

      @media (max-width: 767px) {
        margin-bottom: 16px;
      }
    }
  }
`;

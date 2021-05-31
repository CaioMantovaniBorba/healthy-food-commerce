import styled from 'styled-components';

export const Container = styled.div`
  background: #eee;
  padding: 64px 0 128px 0;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 480px;
  margin: 0 auto;

  @media (max-width: 767px) {
    max-width: 80%;
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
  }
`;

export const Cards = styled.div`
  display: flex;
  overflow: auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  max-width: 348px;
  margin: 0 8px;

  img {
    margin-bottom: 16px;

    @media (max-width: 767px) {
      max-width: 300px;
    }
  }

  @media (max-width: 767px) {
    max-width: 300px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 16px;
  height: 180px;

  h1 {
    color: var(--secondary-color);
    font-size: 24px;
    width: 270px;
    margin: 0 0 16px 16px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;

  div {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #ccc;
    margin-right: 8px;
  }

  span {
    font-size: 16px;
    font-family: 'Mulish', sans-serif;
    color: #9e9baf;
  }
`;

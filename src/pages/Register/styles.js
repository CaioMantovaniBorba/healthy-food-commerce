import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: auto;
  width: 100%;

  > div {
    height: 150px;
  }

  h1 {
    width: 330px;
    font-size: 48px;
    color: var(--secondary-color);
    margin-bottom: 24px;
    line-height: 1.6em;
    text-align: center;

    @media (max-width: 767px) {
      font-size: 32px;
      margin-bottom: 32px;
      width: 80%;
    }
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    border-radius: 15px 15px 0 0;

    input {
      display: block;
      height: 52px;
      width: 100%;
      padding: 16px;
      margin: 8px 0;
      font-size: 16px;
      background-clip: padding-box;
      border-radius: 4px;
      border: 1px solid #b4b4b4;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }

      &.error {
        border-color: #ff3333;
      }
    }

    span {
      font-size: 16px;
      color: #ff3333;
    }

    button {
      height: 52px;
      width: 130px;
      background: var(--primary-color);
      margin: 32px 0;
      padding: 16px 32px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      color: #fff;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.2;
      }
    }

    img {
      width: 10%;
    }
  }
`;

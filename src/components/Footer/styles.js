import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  height: 103px;
  background: #eee;

  span {
    font-size: 14px;
    color: var(--secondary-color);
  }

  a {
    font-size: 14px;
    color: #9e9baf;

    &:first-child {
      margin-right: 16px;
    }
  }

  @media (max-width: 768px) {
    background: var(--primary-color);

    span {
      color: #fff;
    }

    a {
      color: var(--secondary-color);
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;
    background: var(--primary-color);
  }
`;

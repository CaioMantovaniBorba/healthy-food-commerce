import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  height: 103px;
  background: #eee;

  @media (max-width: 768px) {
    background: var(--primary-color);
  }

  @media (max-width: 767px) {
    flex-direction: column;
    background: var(--primary-color);
  }

  span {
    font-size: 14px;
    color: var(--secondary-color);

    @media (max-width: 768px) {
      color: #fff;
    }
  }

  a {
    font-size: 14px;
    color: #9e9baf;

    &:first-child {
      margin-right: 16px;
    }

    @media (max-width: 768px) {
      color: var(--secondary-color);
    }
  }
`;

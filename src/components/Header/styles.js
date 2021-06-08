import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  nav {
    display: flex;
    align-items: center;
    height: 100px;
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 0 auto;
    }
  }

  #burger {
    display: none;
    visibility: hidden;
    height: 28px;
    width: 28px;
  }

  @media (max-width: 768px) {
    #burger {
      display: flex;
      justify-content: space-around;
      flex-flow: column nowrap;
      visibility: visible;
      z-index: 1;
      top: 36px;
      right: 24px;

      &.open {
        position: fixed;
      }

      &.closed {
        position: absolute;
      }

      div {
        width: 28px;
        height: 4px;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.2s linear;
        background-color: #000;
      }

      &.open div:nth-child(1) {
        transform: rotate(45deg);
      }

      &.open div:nth-child(2) {
        transform: translateX(100%);
        opacity: 0;
      }

      &.open div:nth-child(3) {
        transform: rotate(-45deg);
      }
    }

    #burguer-menu {
      position: fixed;
      flex-flow: column nowrap;
      align-items: center;
      top: 0;
      right: 0;
      height: 100vh;
      width: 250px;
      padding-top: 96px;
      background-color: #eee;
      transition: all 0.2s ease-in-out;

      &.closed {
        transform: translateX(100%);
        box-shadow: 1px 0px 0px 100vw rgba(15, 15, 15, 0);
      }

      &.open {
        transform: translateX(0);
        box-shadow: 1px 0px 0px 100vw rgba(15, 15, 15, 0.4);
      }
    }
  }
`;

export const Logo = styled.h1`
  font-size: 32px;
  color: var(--primary-color);
`;

export const Burger = styled.div`
  width: 455px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-size: 16px;
      font-weight: bold;
      text-decoration: none;
      text-transform: uppercase;
      color: #fff;
    }

    &.register-page a {
      color: var(--secondary-color);
    }

    &.register-page .register {
      background: var(--primary-color);
      color: #fff;
    }

    .register {
      padding: 16px;
      color: var(--primary-color);
      background: #fff;
      border-radius: 4px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    > div {
      flex-direction: column;

      a {
        width: 100%;
        padding: 12px 16px;
        text-align: right;
        color: var(--secondary-color);
        border-top: 1px solid var(--tertiary-color);
      }

      &.register-page .register {
        background: none;
        color: var(--primary-color);
      }

      .register {
        background: none;
      }
    }
  }
`;

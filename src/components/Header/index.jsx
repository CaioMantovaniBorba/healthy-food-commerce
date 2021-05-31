/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Container, Logo, Burger } from './styles';

function Header() {
  const [openBurger, setOpenBurger] = useState(false);
  const location = useLocation().pathname;
  let className = '';

  function handleBurgerMenu() {
    const burger = document.querySelector('#burger');

    if (!burger) return;

    if (burger.classList.value === 'closed') {
      setOpenBurger(true);
    }

    if (burger.classList.value === 'open') {
      setOpenBurger(false);
    }
  }

  if (location === '/register') {
    className = 'register-page';
  }

  if (location === '/') {
    className = '';
  }

  return (
    <Container>
      <nav>
        <div>
          <Link to="/">
            <Logo>Healthy Food</Logo>
          </Link>
          <div
            id="burger"
            className={openBurger ? 'open' : 'closed'}
            onClick={handleBurgerMenu}
          >
            <div />
            <div />
            <div />
          </div>

          <div id="burguer-menu" className={openBurger ? 'open' : 'closed'}>
            <Burger
              className={openBurger ? 'open' : 'closed'}
              id="burguer-menu"
            >
              <div className={className}>
                <a href="/" onClick={handleBurgerMenu}>
                  Healthy Recipes
                </a>
                <a href="/" onClick={handleBurgerMenu}>
                  Blog
                </a>
                <a href="/" onClick={handleBurgerMenu}>
                  Join
                </a>
                <Link
                  to="/register"
                  className="register"
                  onClick={handleBurgerMenu}
                >
                  Register
                </Link>
              </div>
            </Burger>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Header;

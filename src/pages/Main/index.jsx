import Home from '../../components/Home';
import Recipes from '../../components/Recipes';
import Services from '../../components/Services';
import Blog from '../../components/Blog';
import Join from '../../components/Join';

import GlobalStyle from '../../styles/global';

function Main() {
  return (
    <>
      <Home />
      <Recipes />
      <Services />
      <Blog />
      <Join />
      <GlobalStyle />
    </>
  );
}

export default Main;

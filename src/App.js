import { Router } from 'react-router-dom';

import history from './services/history';

import Routes from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      <Footer />
    </Router>
  );
}

export default App;

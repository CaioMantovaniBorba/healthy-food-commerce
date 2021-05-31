import { MdSearch } from 'react-icons/md';

import { Container, Search, Background } from './styles';

import Ilustration from '../../assets/illustration.svg';

function Home() {
  return (
    <Container>
      <Search>
        <h1>Ready for Trying a new recipe?</h1>
        <div>
          <input type="text" placeholder="Search healthy recipes" />
          <button type="button">
            <MdSearch size="22" color="#fff" />
          </button>
        </div>
      </Search>
      <Background>
        <img src={Ilustration} alt="Illustration" />
      </Background>
    </Container>
  );
}

export default Home;

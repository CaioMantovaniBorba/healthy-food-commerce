import { Container, Left, Search, Right } from './styles';

import joinImage from '../../assets/bloco_final_image.svg';

function Services() {
  return (
    <Container id="join">
      <Left>
        <Search>
          <h1>Join our membership to get special offer</h1>
          <div>
            <input type="text" placeholder="Enter your email address " />
            <button type="button">Join</button>
          </div>
        </Search>
      </Left>
      <Right>
        <img src={joinImage} alt="Join" />
      </Right>
    </Container>
  );
}

export default Services;

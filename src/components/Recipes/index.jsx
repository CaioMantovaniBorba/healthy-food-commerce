import { Container, Top, Cards, Card } from './styles';

import Recipe01 from '../../assets/comida_1.svg';
import Recipe02 from '../../assets/comida_2.svg';
import Recipe03 from '../../assets/comida_3.svg';
import Recipe04 from '../../assets/comida_4.svg';

function Recipes() {
  return (
    <Container id="recipes">
      <Top>
        <h1>Our Best Recipes</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts
        </p>
      </Top>
      <Cards>
        <Card>
          <img src={Recipe01} alt="Broccoli Salad with Bacon" />
          <div>
            <h1>Broccoli Salad with Bacon</h1>
            <button type="button">See Recipe</button>
          </div>
        </Card>
        <Card>
          <img src={Recipe02} alt="Broccoli Salad with Bacon" />
          <div>
            <h1>Classic Beef Burgers</h1>
            <button type="button">See Recipe</button>
          </div>
        </Card>
        <Card>
          <img src={Recipe03} alt="Broccoli Salad with Bacon" />
          <div>
            <h1>Classic Potato Salad</h1>
            <button type="button">See Recipe</button>
          </div>
        </Card>
        <Card>
          <img src={Recipe04} alt="Broccoli Salad with Bacon" />
          <div>
            <h1>Cherry Cobbler on the Grill</h1>
            <button type="button">See Recipe</button>
          </div>
        </Card>
      </Cards>
    </Container>
  );
}

export default Recipes;

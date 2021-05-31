import { Container, Top, Cards, Card, Content, Profile } from './styles';

import blogImage01 from '../../assets/blog_image_1.svg';
import blogImage02 from '../../assets/blog_image_2.svg';
import blogImage03 from '../../assets/blog_image_3.svg';
import blogImage04 from '../../assets/blog_image_4.svg';

function Blog() {
  return (
    <Container id="blog">
      <Top>
        <h1>Read Our Blog</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts
        </p>
      </Top>

      <Cards>
        <Card>
          <img src={blogImage01} alt="Blog 01" />
          <Content>
            <h1>Quick-start guide to nuts and seeds</h1>
            <Profile>
              <div />
              <span>Kevin Ibrahim</span>
            </Profile>
          </Content>
        </Card>
        <Card>
          <img src={blogImage02} alt="Blog 02" />
          <Content>
            <h1>Nutrition: Tips for Improving Your Health</h1>
            <Profile>
              <div />
              <span>Mike Jackson</span>
            </Profile>
          </Content>
        </Card>
        <Card>
          <img src={blogImage03} alt="Blog 03" />
          <Content>
            <h1>The top 10 benefits of eating healthy</h1>
            <Profile>
              <div />
              <span>Bryan McGregor</span>
            </Profile>
          </Content>
        </Card>
        <Card>
          <img src={blogImage04} alt="Blog 04" />
          <Content>
            <h1>Lorem ipsum dolor sit amet</h1>
            <Profile>
              <div />
              <span>John Doe</span>
            </Profile>
          </Content>
        </Card>
        <Card>
          <img src={blogImage01} alt="Blog 01" />
          <Content>
            <h1>Quick-start guide to nuts and seeds</h1>
            <Profile>
              <div />
              <span>Kevin Ibrahim</span>
            </Profile>
          </Content>
        </Card>
        <Card>
          <img src={blogImage02} alt="Blog 02" />
          <Content>
            <h1>Nutrition: Tips for Improving Your Health</h1>
            <Profile>
              <div />
              <span>Mike Jackson</span>
            </Profile>
          </Content>
        </Card>
      </Cards>
    </Container>
  );
}

export default Blog;

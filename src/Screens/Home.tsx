import {Text} from 'react-native';
import styled from 'styled-components/native';
import Post from '../components/Post';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.mainBg};
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <Post />
    </Container>
  );
};

export default Home;

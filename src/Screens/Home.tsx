import styled from 'styled-components/native';
import {useQuery} from '@tanstack/react-query';
import {fetchData} from '../utils/fetchData';
import PostsList from '../components/PostsList';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.mainBg};
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const {data: postsData} = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchData.posts(),
  });

  if (postsData) {
    return (
      <Container>
        <PostsList postsData={postsData} />
      </Container>
    );
  }
};

export default Home;

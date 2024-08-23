import styled from 'styled-components/native';
import {useQuery} from '@tanstack/react-query';
import {fetchData} from '../utils/fetchData';
import PostsList from '../components/PostsList';
import {PostDataType} from '../utils/types';
import {useEffect} from 'react';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.mainBg};
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const {data: postsData} = useQuery<PostDataType[]>({
    queryKey: ['posts'],
    queryFn: () => fetchData.posts(),
  });

  useEffect(() => {
    console.log(postsData);
  }, [postsData]);

  if (postsData) {
    return (
      <Container>
        <PostsList postsData={postsData} />
      </Container>
    );
  }
};

export default Home;

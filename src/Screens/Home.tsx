import {Text} from 'react-native';
import styled from 'styled-components/native';
import Post from '../components/Post/Post';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.mainBg};
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const author = {
    id: 'Manchester.City',
    profileImage: 'https://banner2.cleanpng.com/20180602/uxx/avod1og6q.webp',
  };
  const images = [
    'https://media.gq.com/photos/63c045b287b2608f9262ff28/16:9/w_1280,c_limit/halland-16x9.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10UHlxK5SIpX6uRnBpHscu6EBLe0sUKxhSA&s',
    'https://www.mancity.com/features/phil-foden-one-of-our-own/assets/VNxkiCqskG/phil-foden-one-of-our-own-750x422.jpg',
  ];
  const actions = {
    likes: [
      {
        id: '1',
        profileImage:
          'https://banner2.cleanpng.com/20180602/uxx/avod1og6q.webp',
      },
      {
        id: '2',
        profileImage:
          'https://banner2.cleanpng.com/20180602/uxx/avod1og6q.webp',
      },
    ],
    comments: [
      {
        author: {
          id: '3',
          profileImage:
            'https://banner2.cleanpng.com/20180602/uxx/avod1og6q.webp',
        },

        content: "Manchester City's Phil Foden has been named the 2021 Golden",
        date: '7월 9일',
        likes: 1,
      },
    ],
    shares: 10,
  };
  const content = "Manchester City's Phil Foden has been named the 2021 Golden";
  const date = '7월 9일';

  return (
    <Container>
      <Post
        author={author}
        images={images}
        actions={actions}
        content={content}
        date={date}
      />
    </Container>
  );
};

export default Home;

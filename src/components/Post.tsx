import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Actions from './Post/Actions';
import Body from './Post/Body';
import ImagesSlider from './Post/ImagesSlider';

const Container = styled.View`
  width: 100%;
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 10px;
`;
const Profile = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 5px;
`;
const Id = styled.Text`
  font-size: 15px;
  font-weight: 500;
`;

const Post = () => {
  const images = [
    'https://media.gq.com/photos/63c045b287b2608f9262ff28/16:9/w_1280,c_limit/halland-16x9.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10UHlxK5SIpX6uRnBpHscu6EBLe0sUKxhSA&s',
    'https://www.mancity.com/features/phil-foden-one-of-our-own/assets/VNxkiCqskG/phil-foden-one-of-our-own-750x422.jpg',
  ];

  return (
    <Container>
      <Header>
        <Profile>
          <Avatar
            source={{
              uri: 'https://banner2.cleanpng.com/20180602/uxx/avod1og6q.webp',
            }}
          />
          <Id>Manchester.City</Id>
        </Profile>
        <Icon name="ellipsis-horizontal" size={20} />
      </Header>
      <ImagesSlider images={images} />
      <Actions />
      <Body />
    </Container>
  );
};

export default Post;

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList as RNFlatList} from 'react-native';
import {Dimensions} from 'react-native';
import Actions from './Post/Actions';
import Body from './Post/Body';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

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
const ImagesSlider = styled.FlatList`` as unknown as typeof RNFlatList;
const Image = styled.Image`
  width: ${SCREEN_WIDTH}px;
  height: ${SCREEN_WIDTH}px;
`;

const Post = () => {
  const renderItem = ({item}: {item: string}) => (
    <Image source={{uri: item}} resizeMode="contain" />
  );

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
      <ImagesSlider
        data={[
          'https://media.gq.com/photos/63c045b287b2608f9262ff28/16:9/w_1280,c_limit/halland-16x9.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10UHlxK5SIpX6uRnBpHscu6EBLe0sUKxhSA&s',
          'https://www.mancity.com/features/phil-foden-one-of-our-own/assets/VNxkiCqskG/phil-foden-one-of-our-own-750x422.jpg',
        ]}
        renderItem={renderItem}
        keyExtractor={item => item}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <Actions />
      <Body />
    </Container>
  );
};

export default Post;

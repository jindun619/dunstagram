import {FlatList as RNFlatList} from 'react-native';
import styled from 'styled-components/native';
import {CommentsDataType} from '../utils/types';
import Comment from '../components/Comment/Comment';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const FlatList = styled.FlatList`` as unknown as typeof RNFlatList;
const Separator = styled.View`
  height: 15px;
`;

interface CommentScreenProps {
  route: {
    params: {
      comments: CommentsDataType[];
    };
  };
}
const CommentScreen = ({route}: CommentScreenProps) => {
  const {comments} = route.params;

  const renderItem = ({item}: {item: CommentsDataType}) => (
    <Comment data={item} />
  );

  return (
    <Container>
      <FlatList
        data={comments}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
      />
    </Container>
  );
};

export default CommentScreen;

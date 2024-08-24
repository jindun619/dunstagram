import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionBtn from './ActionBtn';
import {CommentsDataType} from '../../utils/types';
import CommentModal from '../Comment/CommentModal';
import {useState} from 'react';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;
const BtnsContainer = styled.View`
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;
const BookmarkBtn = styled.TouchableOpacity``;
const BookmarkIcon = styled(Icon)`
  color: ${props => props.theme.mainText};
  font-size: 24px;
`;

interface ActionsProps {
  likes: number;
  comments: CommentsDataType[];
  shares: number;
}
const Actions = ({likes, comments, shares}: ActionsProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <BtnsContainer>
        <ActionBtn name="heart-outline" number={likes} onPress={() => {}} />
        <ActionBtn
          name="chatbubble-outline"
          number={comments.length}
          onPress={() => {
            setModalVisible(true);
          }}
        />
        <ActionBtn name="send-outline" number={shares} onPress={() => {}} />
      </BtnsContainer>
      <BookmarkBtn>
        <BookmarkIcon name="bookmark-outline" />
      </BookmarkBtn>
      <CommentModal
        modalVisible={modalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        comments={comments}
      />
    </Container>
  );
};

export default Actions;

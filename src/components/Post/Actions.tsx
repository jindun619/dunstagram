import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionBtn from './ActionBtn';
import {Comment, User} from '../../utils/types';

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

interface ActionsProps {
  likes: User[];
  comments: Comment[];
  shares: number;
}
const Actions = ({likes, comments, shares}: ActionsProps) => {
  return (
    <Container>
      <BtnsContainer>
        <ActionBtn
          name="heart-outline"
          number={likes.length}
          onPressIcon={() => {}}
          onPressNumber={() => {}}
        />
        <ActionBtn
          name="chatbubble-outline"
          number={comments.length}
          onPressIcon={() => {}}
          onPressNumber={() => {}}
        />
        <ActionBtn
          name="send-outline"
          number={shares}
          onPressIcon={() => {}}
          onPressNumber={() => {}}
        />
      </BtnsContainer>
      <BookmarkBtn>
        <Icon name="bookmark-outline" size={24} />
      </BookmarkBtn>
    </Container>
  );
};

export default Actions;

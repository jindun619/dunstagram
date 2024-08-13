import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionBtn from './ActionBtn';

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

const Actions = () => {
  return (
    <Container>
      <BtnsContainer>
        <ActionBtn
          name="heart-outline"
          number={250}
          onPressIcon={() => {}}
          onPressNumber={() => {}}
        />
        <ActionBtn
          name="chatbubble-outline"
          number={8}
          onPressIcon={() => {}}
          onPressNumber={() => {}}
        />
        <ActionBtn
          name="send-outline"
          number={52}
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

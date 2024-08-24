import {FlatList as RNFlatList} from 'react-native';
import styled from 'styled-components/native';
import {CommentsDataType} from '../../utils/types';
import {useState} from 'react';
import CommentModal from '../Comment/CommentModal';

const Container = styled.View`
  padding: 10px 0 5px 10px;
`;
const MoreBtn = styled.TouchableOpacity``;
const MoreText = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.neutralText};
`;
const ModalContainer = styled.View`
  background-color: ${props => props.theme.mainBg};
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 75%;
`;
const ModalHeader = styled.View`
  width: 100%;
  padding: 10px 0;
  border-bottom-width: 0.3px;
  border-bottom-color: ${props => props.theme.border};
`;
const ModalHeaderText = styled.Text`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  color: ${props => props.theme.mainText};
`;
const FlatList = styled.FlatList`` as unknown as typeof RNFlatList;
const Separator = styled.View`
  height: 20px;
`;

interface CommentsProps {
  comments: CommentsDataType[];
}
const Comments = ({comments}: CommentsProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <MoreBtn onPress={() => setModalVisible(true)}>
        <MoreText>댓글 모두 보기</MoreText>
      </MoreBtn>
      <CommentModal
        modalVisible={modalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        comments={comments}
      />
    </Container>
  );
};

export default Comments;

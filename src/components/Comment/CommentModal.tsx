import {FlatList as RNFlatList, View} from 'react-native';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import {CommentsDataType} from '../../utils/types';
import Comment from './Comment';
import Icon from 'react-native-vector-icons/Ionicons';

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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom-width: 0.3px;
  border-bottom-color: ${props => props.theme.border};
`;
const ModalHeaderText = styled.Text`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  color: ${props => props.theme.mainText};
`;
const ShareBtn = styled.TouchableOpacity``;
const ShareIcon = styled(Icon)`
  color: ${props => props.theme.mainText};
`;
const FlatList = styled.FlatList`` as unknown as typeof RNFlatList;
const Separator = styled.View`
  height: 20px;
`;

interface CommentModalProps {
  modalVisible: boolean;
  onSwipeComplete: () => void;
  comments: CommentsDataType[];
}
const CommentModal = ({
  modalVisible,
  onSwipeComplete,
  comments,
}: CommentModalProps) => {
  const renderItem = ({item}: {item: CommentsDataType}) => (
    <Comment data={item} />
  );
  return (
    <Modal
      isVisible={modalVisible}
      swipeDirection="down"
      onSwipeComplete={onSwipeComplete}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <ModalContainer>
        <ModalHeader>
          <View />
          <ModalHeaderText>댓글</ModalHeaderText>
          <ShareBtn>
            <ShareIcon name="send-outline" size={24} />
          </ShareBtn>
        </ModalHeader>
        <FlatList
          data={comments}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
          contentContainerStyle={{padding: 10}}
        />
      </ModalContainer>
    </Modal>
  );
};

export default CommentModal;

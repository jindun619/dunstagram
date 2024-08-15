import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import {RootNavParamList} from '../../navigation/RootNav';

const Container = styled.View`
  padding: 10px 0 5px 10px;
`;
const MoreBtn = styled.TouchableOpacity``;
const MoreText = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.neutralText};
`;
const NewComment = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
const NewCommentImage = styled.Image`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-right: 5px;
`;
const NewCommentText = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.neutralText};
`;

const Comments = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootNavParamList, 'Tabs'>>();
  return (
    <Container>
      <MoreBtn onPress={() => navigation.push('Comment')}>
        <MoreText>댓글 모두 보기</MoreText>
      </MoreBtn>
      {/* <NewComment>
        <NewCommentImage
          source={{
            uri: 'https://i.pinimg.com/736x/21/96/b4/2196b424fc154e2647ce50b95dfe5e5e.jpg',
          }}
        />
        <NewCommentText>댓글 달기...</NewCommentText>
      </NewComment> */}
    </Container>
  );
};

export default Comments;

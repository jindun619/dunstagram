import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CommentsDataType, UserDataType} from '../../utils/types';
import {useQuery} from '@tanstack/react-query';
import {fetchData} from '../../utils/fetchData';

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;
const AuthorInfoContainer = styled.View`
  flex-direction: row;
`;
const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 5px;
`;
const ContentContainer = styled.View``;
const UsernameContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const UsernameBtn = styled.TouchableOpacity``;
const Username = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.theme.mainText};
  margin-right: 3px;
`;
const Date = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.theme.neutralText};
`;
const Content = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.mainText};
  margin-bottom: 5px;
`;
const ReplyBtn = styled.TouchableOpacity``;
const ReplyText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.neutralText};
`;
const LikeBtn = styled.TouchableOpacity`
  align-items: center;
`;
const LikeIcon = styled(Icon)``;
const LikeCount = styled.Text``;

interface CommentProps {
  data: CommentsDataType;
}
const Comment = ({data}: CommentProps) => {
  const {data: authorData} = useQuery<UserDataType>({
    queryKey: ['user', data.authorId],
    queryFn: () => fetchData.user(data.authorId),
  });

  return (
    <Container>
      <AuthorInfoContainer>
        <ProfileImage source={{uri: authorData?.profileImage}} />
        <ContentContainer>
          <UsernameContainer>
            <UsernameBtn>
              <Username>{authorData?.name}</Username>
            </UsernameBtn>
            <Date>{data.date}</Date>
          </UsernameContainer>
          <Content>{data.content}</Content>
          <ReplyBtn>
            <ReplyText>답글 달기</ReplyText>
          </ReplyBtn>
        </ContentContainer>
      </AuthorInfoContainer>
      <LikeBtn>
        <LikeIcon name="heart-outline" size={20} />
        <LikeCount>{data.likes}</LikeCount>
      </LikeBtn>
    </Container>
  );
};

export default Comment;

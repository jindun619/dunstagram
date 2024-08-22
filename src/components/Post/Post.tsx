import styled from 'styled-components/native';
import Actions from './Actions';
import Body from './Body';
import ImagesSlider from './ImagesSlider';
import Comments from './Comments';
import Header from './Header';
import {Comment, User} from '../../utils/types';
import {fetchData} from '../../utils/fetchData';
import {useQuery} from '@tanstack/react-query';

const Container = styled.View`
  width: 100%;
`;

const Date = styled.Text`
  padding: 0 10px;
  font-size: 13px;
  color: ${props => props.theme.neutralText};
`;

export interface PostProps {
  authorId: number;
  images: string[];
  actions: {
    likes: User[];
    comments: Comment[];
    shares: number;
  };
  content: string;
  date: string;
}
const Post = ({authorId, images, actions, content, date}: PostProps) => {
  const {data: authorData} = useQuery({
    queryKey: ['user', authorId],
    queryFn: () => fetchData.user(authorId),
  });

  return (
    <Container>
      <Header image={authorData?.profileImage} id={authorData?.name} />
      <ImagesSlider images={images} height={300} />
      <Actions
        likes={actions.likes}
        comments={actions.comments}
        shares={actions.shares}
      />
      <Body id={authorData?.name} content={content} />
      <Comments />
      <Date>{date}</Date>
    </Container>
  );
};

export default Post;

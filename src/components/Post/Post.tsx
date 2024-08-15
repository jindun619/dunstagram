import styled from 'styled-components/native';
import Actions from './Actions';
import Body from './Body';
import ImagesSlider from './ImagesSlider';
import Comments from './Comments';
import Header from './Header';
import {Comment, User} from '../../utils/types';

const Container = styled.View`
  width: 100%;
`;

const Date = styled.Text`
  padding: 0 10px;
  font-size: 13px;
  color: ${props => props.theme.neutralText};
`;

interface PostProps {
  author: User;
  images: string[];
  actions: {
    likes: User[];
    comments: Comment[];
    shares: number;
  };
  content: string;
  date: string;
}
const Post = ({author, images, actions, content, date}: PostProps) => {
  return (
    <Container>
      <Header image={author.profileImage} id={author.id} />
      <ImagesSlider images={images} height={300} />
      <Actions
        likes={actions.likes}
        comments={actions.comments}
        shares={actions.shares}
      />
      <Body id={author.id} content={content} />
      <Comments />
      <Date>{date}</Date>
    </Container>
  );
};

export default Post;

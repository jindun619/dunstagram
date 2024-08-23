import styled from 'styled-components/native';
import Actions from './Actions';
import Body from './Body';
import ImagesSlider from './ImagesSlider';
import Comments from './Comments';
import Header from './Header';
import {PostDataType} from '../../utils/types';

const Container = styled.View`
  width: 100%;
`;

const Date = styled.Text`
  padding: 0 10px;
  font-size: 13px;
  color: ${props => props.theme.neutralText};
`;

const Post = ({
  author,
  images,
  likes,
  comments,
  shares,
  content,
  date,
}: PostDataType) => {
  return (
    <Container>
      <Header image={author.profileImage} name={author.name} />
      <ImagesSlider images={images} height={300} />
      <Actions likes={likes} comments={comments} shares={shares} />
      <Body name={author.name} content={content} />
      <Comments data={comments} />
      <Date>{date}</Date>
    </Container>
  );
};

export default Post;

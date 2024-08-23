import {ListRenderItem, FlatList as RNFlatList} from 'react-native';
import styled from 'styled-components/native';
import Post from './Post/Post';
import {PostDataType} from '../utils/types';

const FlatList = styled.FlatList`` as unknown as typeof RNFlatList;
const Separator = styled.View`
  margin-top: 30px;
`;

interface PostsListProps {
  postsData: PostDataType[];
}
const PostsList = ({postsData}: PostsListProps) => {
  const renderItem: ListRenderItem<PostDataType> = ({item}) => {
    return (
      <Post
        author={item.author}
        images={item.images}
        likes={item.likes}
        comments={item.comments}
        shares={item.shares}
        content={item.content}
        date={item.date}
      />
    );
  };
  return (
    <FlatList
      data={postsData}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
    />
  );
};

export default PostsList;

import {ListRenderItem, FlatList as RNFlatList} from 'react-native';
import styled from 'styled-components/native';
import Post, {PostProps} from './Post/Post';

const FlatList = styled.FlatList`` as unknown as typeof RNFlatList;
const Separator = styled.View`
  margin-top: 30px;
`;

interface PostsListProps {
  postsData: PostProps[];
}
const PostsList = ({postsData}: PostsListProps) => {
  const actions = {
    likes: [
      {
        id: '1',
        profileImage:
          'https://banner2.cleanpng.com/20180602/uxx/avod1og6q.webp',
      },
      {
        id: '2',
        profileImage:
          'https://banner2.cleanpng.com/20180602/uxx/avod1og6q.webp',
      },
    ],
    comments: [
      {
        author: {
          id: '3',
          profileImage:
            'https://banner2.cleanpng.com/20180602/uxx/avod1og6q.webp',
        },

        content: "Manchester City's Phil Foden has been named the 2021 Golden",
        date: '7월 9일',
        likes: 1,
      },
    ],
    shares: 10,
  };

  const renderItem: ListRenderItem<PostProps> = ({item}) => {
    return (
      <Post
        authorId={item.authorId}
        images={item.images}
        actions={actions}
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

import styled from 'styled-components/native';
import {Dimensions, FlatList as RNFlatList, ViewToken} from 'react-native';
import {useRef, useState} from 'react';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const Container = styled.View``;
const FlatList = styled.FlatList`` as unknown as typeof RNFlatList;
const Image = styled.Image`
  width: ${SCREEN_WIDTH}px;
`;
const PaginationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
`;
const PaginationDot = styled.View<{active: boolean}>`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin: 0 2px;
  background-color: ${props => (props.active ? '#3897f0' : '#c7c7c7')};
`;

interface ImagesSliderProps {
  images: string[];
  height: number;
}
const ImagesSlider = ({images, height}: ImagesSliderProps) => {
  const [activeIndex, setImageIndex] = useState(0);

  const renderItem = ({item}: {item: string}) => (
    <Image source={{uri: item}} resizeMode="contain" height={height} />
  );
  const renderPagination = () => (
    <PaginationContainer>
      {images.map((_, index) => (
        <PaginationDot key={index} active={index === activeIndex} />
      ))}
    </PaginationContainer>
  );

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      const {index} = viewableItems[0];
      setImageIndex(index as number);
    },
  ).current;

  return (
    <Container>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      {renderPagination()}
    </Container>
  );
};

export default ImagesSlider;

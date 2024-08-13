import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
const IconBtn = styled.TouchableOpacity`
  margin-right: 3px;
`;
const NumberBtn = styled.TouchableOpacity``;
const ActionIcon = styled(Icon)`
  font-size: 24px;
`;
const ActionNumber = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

interface ActionBtnProps {
  name: string;
  number: number;
  onPressIcon: () => void;
  onPressNumber: () => void;
}
const ActionBtn = ({
  name,
  number,
  onPressIcon,
  onPressNumber,
}: ActionBtnProps) => {
  return (
    <Container>
      <IconBtn onPress={onPressIcon}>
        <ActionIcon name={name} />
      </IconBtn>
      <NumberBtn onPress={onPressNumber}>
        <ActionNumber>{number}</ActionNumber>
      </NumberBtn>
    </Container>
  );
};

export default ActionBtn;

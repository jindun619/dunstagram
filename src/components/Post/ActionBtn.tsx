import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const ActionIcon = styled(Icon)`
  font-size: 24px;
  margin-right: 3px;
  color: ${props => props.theme.mainText};
`;
const ActionNumber = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.mainText};
`;

interface ActionBtnProps {
  name: string;
  number: number;
  onPress: () => void;
}
const ActionBtn = ({name, number, onPress}: ActionBtnProps) => {
  return (
    <Container onPress={onPress}>
      <ActionIcon name={name} />
      <ActionNumber>{number}</ActionNumber>
    </Container>
  );
};

export default ActionBtn;

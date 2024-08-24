import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';

export type RootNavParamList = {
  Tabs: undefined;
};
const RootNav = () => {
  const Stack = createStackNavigator<RootNavParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNav;
